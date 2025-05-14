// Assumindo que 'orientacoesSexual' também é exportado por 'gerador-br'
// para manter a lógica original do teste.
const { orientacaoSexual, orientacoesSexual } = require('gerador-br');

describe('orientacaoSexualRand', () => {
  it('should generate a valid sexual orientation', () => {
    const orientacao = orientacaoSexual();
    expect(orientacao.length).toBeGreaterThan(0);
  });

  it('should be a string', () => {
    expect(typeof orientacaoSexual()).toBe('string');
  });
});
