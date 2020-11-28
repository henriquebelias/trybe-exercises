let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
let number = 0;


for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index + 1]) {
    number = numbers[index] * numbers[index + 1];
  } else {
    number = numbers[index] * 2;
  }
  newArray.push(number);
}
console.log(newArray);