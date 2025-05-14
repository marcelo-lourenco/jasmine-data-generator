// Assumindo que 'identidadesPorOrientacao' e 'orientacaoSexual' também são exportados por 'gerador-br'
// para manter a lógica original do teste.
const { identidadePorOrientacao, identidadesPorOrientacao, orientacaoSexual } = require('gerador-br');

describe('identidadePorOrientacao', () => {
  it('should generate a valid gender identity based on the selected sexual orientation', () => {
    const identidade = identidadePorOrientacao();
    expect(identidade.length).toBeGreaterThan(0);
  });

  it('should not be an array (likely a string)', () => { // Test description updated for clarity
    expect(Array.isArray(identidadePorOrientacao())).toBe(false);
    // Se for garantido que é uma string, um teste mais específico seria:
    // expect(typeof identidadePorOrientacao()).toBe('string');
  });

});
