let n = 5;
let symbol = '*';
let result = '';

for (let column = 0; column < n; column += 1) {
    result = result + symbol;
}
for (let line = 0; line < n; line += 1) {
  console.log(result);
}