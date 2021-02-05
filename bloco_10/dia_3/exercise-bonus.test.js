const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

let fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

fetchJoke = jest.fn();

test('teste a chamada feita para um resultado específico', () => {
  const result = {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }
  fetchJoke.mockResolvedValue(result.joke);

  expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});
