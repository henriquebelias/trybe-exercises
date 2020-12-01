// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
function mostRepeated (numbers) {
  let repeatCount = 0;
  let numberTimesRepeated = 0;
  let indexRepeatedNumber = 0; 
  for (let index in numbers) {
    let checkNumber = numbers[index];
    for (let index2 in numbers) {
      if (checkNumber === numbers[index2]) {
        repeatCount += 1;
      }
    }
    if (repeatCount > numberTimesRepeated) {
      numberTimesRepeated = repeatCount;
      indexRepeatedNumber = index;
    }
    repeatCount = 0;
  }
  return numbers[indexRepeatedNumber];
}

console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3, 5, 6, 5, 5]));