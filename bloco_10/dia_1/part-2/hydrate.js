function hydrate(order) {
  let numbers = order.match(/\d+/g)
  .map(Number).reduce((acc, curr) => acc + curr, 0);
  return (numbers === 1)
    ? `${numbers} copo de água` : `${numbers} copos de água`;
}

module.exports = hydrate;
