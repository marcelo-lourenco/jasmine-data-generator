// Assumindo que 'identidadesGenero' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { identidadeGenero, identidadesGenero } = require('gerador-br');

describe('identidadeGenero', () => {
  it('should generate a valid gender identity', () => {
    const identidade = identidadeGenero();
    expect(identidade.length).toBeGreaterThan(0);
  });

  it('should be a string', () => {
    expect(typeof identidadeGenero()).toBe('string');
  });

});
