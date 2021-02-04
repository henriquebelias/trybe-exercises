const { encode, decode } = require('./encode-decode');

/*
Para as funções encode e decode crie os seguintes testes:
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/
describe('Encode e Decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Teste se encode converte vogais para números', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Teste se decode converte números para vogais', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('uoiea')).not.toBe('12345');
    expect(decode('54321')).not.toBe('aeiou');
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('aeiou')).toHaveLength(5);
    expect(decode('12345')).toHaveLength(5);
  })
});