function smallestIndex(numbers) {
  let smallNumber = 0;
  for (let index in numbers){
    if (numbers[smallNumber] > numbers[index]) {
      smallNumber = index;
    }
  }
  return smallNumber;
}

console.log(smallestIndex([-100, 2, -50, 4, 6, 7, 10, 0, -3, -35]));
