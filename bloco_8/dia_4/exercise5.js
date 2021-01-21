// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = ( [value1, value2, value3] ) => [value3, value2, value1];

const swappedList = swap(myList)

assert.strictEqual(swappedList[0], 3)
assert.strictEqual(swappedList[1], 2)
assert.strictEqual(swappedList[2], 1)