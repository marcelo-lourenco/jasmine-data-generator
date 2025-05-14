// Assumindo que 'coresPele' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { corPele, coresPele } = require('gerador-br');

describe('corPele', () => {
  it('should generate a valid skin color', () => {
    const cor = corPele();
    expect(cor.length).toBeGreaterThan(0);
  });

  it('should be a string', () => {
    expect(typeof corPele()).toBe('string');
  });

});