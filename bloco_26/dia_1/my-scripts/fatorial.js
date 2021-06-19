/*
Crie um script que realize o fatorial de um número n .
O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
Armazene o script no arquivo fatorial.js .
Utilize o readline-sync para realizar o input de dados.
O script deve ser acionado através do comando npm run fatorial
Adicione o script ao menu criado no exercício 5.
Adicione validações para garantir que o valor informado seja um inteiro maior que 0.
*/

const readline = require('readline-sync');

const calcFatorial = () => {
  const number = readline.questionInt('Informe um número: ');
  let fatorial = number;
  for (let index = 1; index < number; index++) {
    fatorial *= index
  }
  console.log(fatorial);
}

calcFatorial();
