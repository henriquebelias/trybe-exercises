const randomNumber = require('./random-number');

const mockGenerateNumber = jest.spyOn(randomNumber, 'generateRandomNumber');

test('testa a chamada da função, seu retorno, e a quantidade de vezes que foi chamada', () => {
  mockGenerateNumber.mockReturnValue(10);

  mockGenerateNumber();
  expect(mockGenerateNumber).toHaveBeenCalled();
  expect(mockGenerateNumber()).toBe(10);
  expect(mockGenerateNumber).toHaveBeenCalledTimes(2);
});
