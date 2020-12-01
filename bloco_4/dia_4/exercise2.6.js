function sum(number) {
  let adition = 0;
  for (let index = 1; index <= number; index += 1) {
    adition += index;
  }
  return adition;
}

console.log(sum(5));
