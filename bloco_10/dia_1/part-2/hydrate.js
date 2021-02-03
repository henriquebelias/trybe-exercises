function hydrate(order) {
  let numbers = order.match(/\d+/g).map(Number);
  let waterCups = 0;
  let result;

  for (let index in numbers) {
    waterCups += numbers[index]
  }

  if (waterCups === 1) {
    result = `${waterCups} copo de água`;
  } else {
    result = `${waterCups} copos de água`;
  }
  return result;
}
