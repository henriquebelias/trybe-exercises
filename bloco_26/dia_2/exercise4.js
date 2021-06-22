/*
4. Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
  Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
    1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
    2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
    3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
    4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
    5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
    6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
*/
const fs = require('fs').promises;

// function charactersName() {
//   fs.readFile('./simpsons.json', 'utf-8')
//     .then(response => JSON.parse(response))
//     .then(response => response.map(({id, name}) => `${id} - ${name}`))
//     .then(response => response.forEach(character => console.log(character)));
// }
// charactersName();

async function characterById(id) {
  const characters = await fs.readFile('./simpsons.json', 'utf-8')
    .then(response => JSON.parse(response));
  const character = characters.find(character => character.id === id.toString());
  if (!character) throw Error('id não encontrado')
  return character;
}
characterById(1)
  .then(response => console.log(response.name))
  .catch(err => console.log(err.message));
characterById(11)
  .then(response => console.log(response.name))
  .catch(err => console.log(err.message));
