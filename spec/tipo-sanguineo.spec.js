// Assumindo que 'tiposSanguineo' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { tipoSanguineo, tiposSanguineo } = require('gerador-br');

describe('tipoSanguineo', () => {
  it('should generate a valid blood type', () => {
    const tipo = tipoSanguineo();
    expect(tipo.length).toBeGreaterThan(0);
  });

  it('should be a string', () => {
    expect(typeof tipoSanguineo()).toBe('string');
  });

});
