/*
3. Reescreva o código do exercício anterior para que utilize async/await .
  Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.
*/
async function returnPromise(param1, param2, param3) {
  const types = [param2, param2, param3].map(param => typeof param);
  if (types.some(type => type !== 'number')) throw new Error('Informe apenas números');
  const result = (param1 + param2) * param3;
  if (result < 50) throw new Error('Valor muito baixo');
  return result;
}

const firstParam = Math.floor(Math.random() * 100 + 1);
const secondParam = Math.floor(Math.random() * 100 + 1);
const thirdParam = Math.floor(Math.random() * 100 + 1);

async function main() {
  try {
    const response = await returnPromise(firstParam, secondParam, thirdParam);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}
main();
