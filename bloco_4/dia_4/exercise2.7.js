// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be") ;
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan") ;
// Retorno esperado: false
function sameEnding (word, ending) {
  let reverseWord = word.split('').reverse().join('');
  let reverseEnding = ending.split('').reverse().join('');

  for (let index in ending) {
    if (reverseWord[index] != reverseEnding[index]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(sameEnding('trybe', 'be'));
console.log(sameEnding('fernando', 'fernan'));
console.log(sameEnding('ipsum', 'um'));
