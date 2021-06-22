/*
1. Crie uma função que recebe três parâmetros retorna uma Promise .
  1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
  2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
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
