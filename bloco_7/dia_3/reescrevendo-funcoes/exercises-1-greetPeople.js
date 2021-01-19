const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello';
  let newArray = [];

  for (const person in people) {
    const result = `${greeting} ${people[person]}`;
    newArray.push(result);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);