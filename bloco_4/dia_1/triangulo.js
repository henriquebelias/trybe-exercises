let a = 60;
let b = 60;
let c = 'c';

if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number') {
  console.log('Valor inválido');
} else if (a + b + c == 180) {
  console.log('true');
} else if (a + b + c != 180) {
  console.log('false');
} 

