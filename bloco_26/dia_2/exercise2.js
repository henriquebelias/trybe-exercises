/*
2. Escreva um código para consumir a função construída no exercício anterior.
  1. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
  2. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  3. Utilize then e catch para manipular a Promise retornada pela função:
    1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
    2. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
*/
function returnPromise(param1, param2, param3) {
  return new Promise((resolve, reject) => {
    const types = [param2, param2, param3].map(param => typeof param);
    if (types.some(type => type !== 'number')) reject(new Error('Informe apenas números'));
    const result = (param1 + param2) * param3;
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });
}

const firstParam = Math.floor(Math.random() * 100 + 1);
const secondParam = Math.floor(Math.random() * 100 + 1);
const thirdParam = Math.floor(Math.random() * 100 + 1);

returnPromise(firstParam, secondParam, thirdParam)
  .then(response => console.log(response))
  .catch(err => console.log(err.message));
