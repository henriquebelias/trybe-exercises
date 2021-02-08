const modifyStrings = require('./string-functions');

const mockToUpper = jest.spyOn(modifyStrings, 'toUpperCase');

test('modifique a implementação da função, restaure a implementação original e teste', () => {
  mockToUpper.mockImplementation(string => string.toLowerCase());

  expect.assertions(2);

  expect(mockToUpper('TESTE')).toBe('teste');

  modifyStrings.toUpperCase.mockRestore();

  expect(modifyStrings.toUpperCase('teste')).toBe('TESTE');
});
