let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggest = 0;

for (let index = 0; index < numbers.length; index += 1) {
  let small = numbers[index];
  if (biggest < small) {
    biggest = numbers[index];
  }
}

console.log(biggest);
