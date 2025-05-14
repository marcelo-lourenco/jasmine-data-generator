const { apelido } = require('gerador-br');

describe('apelido', () => {
  it('deve gerar um apelido válido', () => {
    const apelidoGerado = apelido();
    expect(apelidoGerado.length).toBeGreaterThan(0);
  });

  it('deve ser uma string', () => {
    expect(typeof apelido()).toBe('string');
  });
});
