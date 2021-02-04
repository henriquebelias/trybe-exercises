const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('Test the uppercase function', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});