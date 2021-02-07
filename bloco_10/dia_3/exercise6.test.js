const fetch = require('node-fetch')

let fetchDogPictures = () => {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
    .then(object => object.message);

}

fetchDogPictures = jest.fn();

test('deve interpretar que a requisição se resolveu', async () => {
  fetchDogPictures.mockResolvedValue('request sucess');

  expect.assertions(1);

  const data = await fetchDogPictures();

  expect(data).toBe('request sucess');
});

test('deve interpretar que a requisição falhou', async () => {
  fetchDogPictures.mockRejectedValue('request failed');
  
  expect.assertions(1);

  try {
    await fetchDogPictures();
  } catch (error) {
    expect(error).toBe('request failed');
  }
});
