const fetch = require('node-fetch')

let fetchDogPictures = async () => {
  return fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json())
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json));
}

fetchDogPictures = jest.fn();

test('deve interpretar que a requisição se resolveu', async () => {
  fetchDogPictures.mockResolvedValue('request sucess');

  expect(fetchDogPictures()).resolves.toBe('request sucess');
});

test('deve interpretar que a requisição falhou', async () => {
  fetchDogPictures.mockRejectedValue('request failed');

  expect(fetchDogPictures()).rejects.toBe('request failed');
});
