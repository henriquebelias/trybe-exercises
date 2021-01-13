//PARTE 2

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.

const fatorial = number => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }
  return result;
}
console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let word1 = '';
  let word2 = '';
  let longest = '';
  for (let index = 1; index < words.length; index += 1) {
    word1 = words[index];
    word2 = words[index - 1];
    if (longest.length > word1.length && longest.length > word2.length) {
      longest = longest;
    } else if (word1.length > word2.length) {
      longest = word1;
    } else {
      longest = word2;
    }
  }
  return longest;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
