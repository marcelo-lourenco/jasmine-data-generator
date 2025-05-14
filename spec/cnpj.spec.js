const { cnpj, cnpjDV } = require('gerador-br');

describe('CNPJ Generator', () => {
  it('should generate a valid CNPJ with mask', () => {
    const cnpjWithMask = cnpj(true);
    expect(cnpjWithMask.length).toBe(18); // 14 digits + 3 separators + 1 hyphen
    expect(cnpjWithMask.match(/\d/g).length).toBe(14); // 14 digits
    expect(cnpjWithMask.match(/\./g).length).toBe(2); // 2 dots
    expect(cnpjWithMask.match(/\//g).length).toBe(1); // 1 slash
    expect(cnpjWithMask.match(/-/g).length).toBe(1); // 1 hyphen
  });

  it('should generate a valid CNPJ without mask', () => {
    const cnpjWithoutMask = cnpj(false);
    expect(cnpjWithoutMask.length).toBe(14); // 14 digits
    expect(cnpjWithoutMask.match(/\d/g).length).toBe(14); // 14 digits
  });
});
