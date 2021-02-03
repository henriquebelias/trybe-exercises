const { obj1, obj2, obj3 } = require('./exercises-5-object');

describe('Teste os objetos', () => {
  it('Compare o obj1 e o obj2 para verificar se são identicos', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Compare o obj1 e o obj3 para verificar se são identicos', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('Compare o obj2 e o obj3 para verificar se são identicos', () => {
    expect(obj2).not.toEqual(obj3);
  });
});