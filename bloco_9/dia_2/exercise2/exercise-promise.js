const numbersSquared =  new Promise((resolve, reject) => {
  const number = () => Math.round(Math.random() * 50);
  const array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(number() ** 2);
  }
  const sumOfArray = array.reduce((acc, currentValue) => acc + currentValue);
  (sumOfArray < 8000) ? resolve(sumOfArray) : reject(sumOfArray);
})
.then(result => [result / 2, result / 3, result / 5, result / 10])
.then(value => value.reduce((acc, currentValue) => acc + currentValue))
.then(value => console.log(`Sucesso - ${value}`))
.catch(error => console.log('É mais de oito mil! Essa promisse deve estar quebrada!', error));
