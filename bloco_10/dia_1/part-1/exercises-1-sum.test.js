const sum = require('./exercises-1-sum');

describe('Testa a função de soma', () => {
  it('Teste se o retorn de sum (4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  test('Teste se a mensagem de erro é "parameters must be number" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(/parameters must be numbers/);
  });
})