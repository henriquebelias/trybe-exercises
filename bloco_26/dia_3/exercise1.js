/*
Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
  * Essa função irá receber um número como parâmetro e retornar uma string como resposta;
  * Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
  1. Descreva todos os cenário de teste utilizando describes ;
  2. Descreva todos os testes que serão feitos utilizando its ;
  3. Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
*/

const { expect } = require('chai');
const checkNumber = require('./exercise2');

describe('Função checa número', () => {
  it('é positivo', () => {
    const result = checkNumber(1);
    expect(result).to.be.a('string');
    expect(result).to.equals('positivo');
  });

  it('é negativo', () => {
    const result = checkNumber(-1);
    expect(result).to.be.a('string');
    expect(result).to.equals('negativo');
  });

  it('é neutro', () => {
    const result = checkNumber(0);
    expect(result).to.be.a('string');
    expect(result).to.equals('neutro');
  });

  it('checa se o parâmetro é número', () => {
    const result = checkNumber('1');
    expect(result).to.be.a('string');
    expect(result).to.equals('o valor deve ser um número');
  })
});
