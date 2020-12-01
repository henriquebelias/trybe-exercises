// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome("arara") ;
// Retorno esperado: true
// verificaPalindrome("desenvolvimento") ;
// Retorno esperado: false
function isPalindrome(word) {
  let reverseWord = '';
  for (let index = word.length - 1; index >= 0; index -= 1) {
    reverseWord += word[index];
  }
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));
console.log(isPalindrome('123321'));
console.log(isPalindrome('123456'));


