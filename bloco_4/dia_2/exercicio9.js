let array = [];
let division = [];

for (let index = 1; index < 26; index += 1) {
  array.push(index); 
}

for (let div = 0; div < array.length; div += 1) {
  division.push(array[div] / 2);
}

console.log(division);

