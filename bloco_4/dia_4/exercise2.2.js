function biggestIndex (numbers) {
  let bigNumber = 0;
  for (let index in numbers){
    if (numbers[bigNumber] < numbers[index]) {
      bigNumber = index;
    }
  }
  return bigNumber;
}

console.log(biggestIndex([2, 3, 6, 7, 10, 1]));