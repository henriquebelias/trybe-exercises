function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if(paid < payable) {
    throw Error('paid value is not enough');
  }
  change.push(remaining);
  console.log(remaining);

  return change;
}
getChange(215, 300); // 85

// const assert = require('assert');

// let result = getChange(1, 1); // no change/coins just an empty array
// let expected = [];
// assert.deepStrictEqual(result, expected);

// result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
// expected = [50, 20, 10, 5];
// assert.deepStrictEqual(result, expected);

// result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
// expected = [100, 10, 2, 2];
// assert.deepStrictEqual(result, expected);

// result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
// expected = [200, 100, 50, 20, 10, 5, 2, 1];
// assert.deepStrictEqual(result, expected);

// assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);