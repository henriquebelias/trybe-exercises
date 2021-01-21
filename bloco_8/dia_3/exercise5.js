
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((counter, currentValue) => {
    const word = currentValue;
    const wordWithouA = currentValue.toLowerCase().split('a').join('');
    const difference = word.length - wordWithouA.length;
    return counter + difference;
  }, 0);
}

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

assert.deepStrictEqual(containsA(), 20);
