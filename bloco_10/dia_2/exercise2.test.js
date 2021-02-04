const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Teste a função findUserById', () => {
  describe('Quando o return for resolve', () => {
    it('should return the name that the id passed contains', () => {
      expect.assertions(1);
      return getUserName(4).then(userName => {
        expect(userName).toEqual('Mark');
      })
    });
  });

  describe('Quando o return for reject', () => {
    it('should return the error if the id doesnt exists', () => {
      expect.assertions(1);
      return getUserName(3).catch(error => {
        expect(error).toEqual({ error: 'User with 3 not found.' });
      })
    });
  });
});