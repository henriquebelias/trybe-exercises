let fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

let fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

fetchJoke = jest.fn();

test('teste a chamada feita para um resultado específico', async () => {
  const result = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }
  fetchJoke.mockResolvedValue(result.joke);
  // fetch = jest.fn(() => Promise.resolve({
  //   json: () => Promise.resolve(result),
  // }));


  expect.assertions(1);

  // return fetchJoke().then(data => expect(data).toBe('Whiteboards ... are remarkable.'));

  // return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');

  // const data = await fetchJoke();
  // expect(data).toBe('Whiteboards ... are remarkable.');

  await expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
