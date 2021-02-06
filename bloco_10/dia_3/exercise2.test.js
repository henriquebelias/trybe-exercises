const randomNumber = require('./random-number');

const mockRandomNumber = jest.spyOn(randomNumber, 'generateRandomNumber');

test('teste a função, alterando sua implementação uma vez', () => {
  mockRandomNumber.mockImplementationOnce((num1, num2) => num1 / num2);

  expect.assertions(2);
  expect(mockRandomNumber(6, 2)).toBe(3);
  expect(mockRandomNumber).toHaveBeenCalled();
  console.log(mockRandomNumber());
});