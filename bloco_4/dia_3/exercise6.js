let isPrime = 8;
let notPrime = 0;

for (let div = 2; div <= isPrime; div += 1) {
  if (isPrime % div == 0) {
    notPrime += 1;
  }
}
if (notPrime > 1) {
  console.log('Não é primo.')
} else {
  console.log('É primo.')
}