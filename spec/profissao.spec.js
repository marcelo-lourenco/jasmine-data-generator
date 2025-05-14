const { profissao } = require('gerador-br');

describe('Profissão Generator', () => {
  it('should generate a valid profession', () => {
    const profession = profissao();
    expect(typeof profession).toBe('string');
    expect(profession.length).toBeGreaterThan(0);
  });
});
