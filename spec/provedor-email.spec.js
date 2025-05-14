// Assumindo que 'provedoresEmail' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { provedorEmail, provedoresEmail } = require('gerador-br');

describe('provedorEmailRand', () => {
  it('should generate a valid email provider', () => {
    const provedor = provedorEmail();
    expect(provedor.length).toBeGreaterThan(0);
  });

  it('should be a string', () => {
    expect(typeof provedorEmail()).toBe('string');
  });

});
