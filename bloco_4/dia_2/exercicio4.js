let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let avg = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
  avg = sum / numbers.length;
}

if (avg > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}