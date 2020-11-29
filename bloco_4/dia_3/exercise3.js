// Faça um programa que, dado um valor n qualquer, seja n > 1, imprima um triângulo alinhado a
// direita. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****
n = 5;
let result = '';

for (let line = 1; line <= n; line += 1) {
  for (let column = 0; column < n; column += 1) {
    if(column < (n - line)) {
      result += ' ';
    } else {
      result += '*';
    } 
  }
  console.log(result);
  result = '';
}