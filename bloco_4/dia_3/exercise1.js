let n = 5;
let result = '';

for (let line = 0; line < n; line += 1) {
  
  for (let column = 0; column < n; column += 1) {
    result += '*';
  } 
  console.log(result);
  result = ''; 
  
}