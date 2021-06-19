const readline = require('readline-sync');

const avgSpeedCalc = () => {
  const distance = readline.questionInt('Qual é a distância? (metros) ');
  const time = readline.questionInt('Qual é a velocidade? (segundos) ');

  return distance / time;
}

console.log(avgSpeedCalc());
