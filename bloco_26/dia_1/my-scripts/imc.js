const readline = require('readline-sync');

const imcCalculator = () => {
  const weight = readline.questionFloat('Qual seu peso? ');
  const height = readline.questionFloat('Qual sua altura? ');
  const imc =  weight / (height ** 2);

  if (imc < 18.5) return `Seu imc é ${imc}: Abaixo do peso (magreza)`;
  if (imc >= 18.5 && imc <= 24.9) return `Seu imc é ${imc}: Peso normal`;
  if (imc >= 25 && imc <= 29.9) return `Seu imc é ${imc}: Acima do peso (sobrepeso)`;
  if (imc >= 30 && imc <= 34.9) return `Seu imc é ${imc}: Obesidade grau I `;
  if (imc >= 35 && imc <= 39.9) return `Seu imc é ${imc}: Obesidade grau II `;
  if (imc >= 40) return `Seu imc é ${imc}: Obesidade graus III e IV`;
};

console.log(imcCalculator());
