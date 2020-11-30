function product(valorCusto, valorVenda) {
  let impostoSobreOCusto = 0.2 * valorCusto;
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  return valorVenda - valorCustoTotal;
}

console.log(`O lucro é: ${product(800, 1200)}`);
console.log(`O lucro é: ${product(1000, 1500)}`);
