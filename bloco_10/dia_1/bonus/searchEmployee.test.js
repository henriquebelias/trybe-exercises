const searchEmployee = require('./searchEmployee');

describe('Testes função searchEmployee', () => {
  it('Teste se searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Teste se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Teste o retorno da função quando passado um ID e uma informação existente', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
  });

  it('Teste o retorno da função quando passado um ID inexistente', () => {
    expect(searchEmployee('1', 'firstName')).toBe('ID não identificada');
  })

  it('Teste o retorno da função quando passada uma informação inexistente', () => {
    expect(searchEmployee('4678-2', 'middleName')).toBe('Informação indisponível');
  });
});