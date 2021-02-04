const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Teste a função getRepos', () => {
  it('should test if there are determined repositories in the requisition', async () => {
    const repoList = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect.assertions(2);
    expect(repoList).toContain('sd-01-week4-5-project-todo-list');
    expect(repoList).toContain('sd-01-week4-5-project-meme-generator');
  });
});
