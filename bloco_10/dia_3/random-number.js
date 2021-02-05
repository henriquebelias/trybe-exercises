/*
Crie uma função que gere um número aleatório entre 0 e 100.
*/

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 101);
}

module.exports = generateRandomNumber;
