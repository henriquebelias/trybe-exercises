const sumOfArray = () => {
  const number = () => Math.round(Math.random() * 50);
  const array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(number() ** 2);
  }

  const sum = array.reduce((acc, currentValue) => acc + currentValue);
  
  if (sum > 8000) {
    throw new Error('Soma maior que 8000');
  }
  return sum;
} 

const divideSum = (result) => {
  return [result / 2, result / 3, result / 5, result / 10];
}

const numberSquared = async () => {
  try {
    const result = await sumOfArray();
    const resultDivided = await divideSum(result);
    console.log('Funcionou', resultDivided);
  } catch (error) {
    console.log('Não funcionou');
  }
}

numberSquared();
