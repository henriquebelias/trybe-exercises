const modifyStrings = require('./string-functions');
jest.mock('./string-functions');

test('modifique a implementação da função para retornar a string em caixa baixa', () => {
  modifyStrings.toUpperCase.mockImplementation(string => string.toLowerCase());

  expect(modifyStrings.toUpperCase('TESTE')).toBe('teste');
});

test('modifique a implementação da função para retornar a última letra de uma string', () => {
  modifyStrings.returnFirstLetter.mockImplementation(string => string[string.length - 1]);

  expect(modifyStrings.returnFirstLetter('teste')).toBe('e');
});

test('modifique a implementação da função para retornar três strings concatenadas', () => {
  modifyStrings.concatStrings.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

  expect(modifyStrings.concatStrings('abc', 'def', 'ghi')).toBe('abcdefghi');
});
