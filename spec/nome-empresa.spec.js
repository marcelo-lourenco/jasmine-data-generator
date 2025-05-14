const { nomeEmpresa } = require('gerador-br');

describe('nomeEmpresa', () => {
  it('should generate a valid company name', () => {
    const nomeEmpresaGerado = nomeEmpresa();
    expect(nomeEmpresaGerado.length).toBeGreaterThan(0);
  });

  it('should generate a valid brasilian company name', () => {
    const nomeEmpresaGerado = nomeEmpresa("BR");
    expect(nomeEmpresaGerado.length).toBeGreaterThan(0);
  });

  it('should be a string', () => {
    expect(typeof nomeEmpresa()).toBe('string');
  });
});
