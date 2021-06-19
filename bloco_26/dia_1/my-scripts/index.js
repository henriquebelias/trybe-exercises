const readline = require('readline-sync');

const scripts = [
  {name: 'Calcular IMC', script: './imc.js'},
  {name: 'Calcular velocidade média', script: './velocidade.js'},
  {name: 'Jogo de adivinhação', script: './sorteio.js'},
  {name: 'Calculo Fatorial', script: './fatorial.js'}
];

const choice = readline.questionInt('Escolha um script: (0, 1, 2, 3) ');

const script = scripts[choice];

require(script.script);
