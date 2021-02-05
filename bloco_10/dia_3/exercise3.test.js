const randomNumber = require('./random-number');

test('Teste a função, modificando a sua implementação uma vez, resetando e modificando novamente', () => {
  const mockRandomNumber = jest.spyOn(randomNumber, 'generateRandomNumber');

  mockRandomNumber.mockImplementation((num1, num2, num3) => num1 * num2 * num3);
  
  expect(mockRandomNumber(1, 2, 3)).toBe(6);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
  expect(mockRandomNumber).toHaveBeenCalledWith(1, 2, 3);

  mockRandomNumber.mockRestore();
  mockRandomNumber.mockImplementation(num => num * 2);

  expect(mockRandomNumber(2)).toBe(4);
  expect(mockRandomNumber).toHaveBeenCalledTimes(1);
  expect(mockRandomNumber).toHaveBeenCalledWith(2);

});