const { cep } = require('gerador-br');

describe('CEP Generator', () => {
  it('should generate a valid CEP with mask', () => {
    const cepWithMask = cep(true);
    expect(cepWithMask.length).toBe(9);
    expect(cepWithMask.slice(5, 6)).toBe('-');
  });

  it('should generate a valid CEP without mask', () => {
    const cepWithoutMask = cep(false);
    expect(cepWithoutMask.length).toBe(8);
    expect(cepWithoutMask.includes('-')).toBe(false);
  });

  it('should generate a valid CEP for a specific state with mask', () => {
    const cepWithMaskForSP = cep(true, 'SP');
    expect(cepWithMaskForSP.length).toBe(9);
    expect(cepWithMaskForSP.slice(5, 6)).toBe('-');
  });

  it('should generate a valid CEP for a specific state without mask', () => {
    const cepWithoutMaskForSP = cep(false, 'SP');
    expect(cepWithoutMaskForSP.length).toBe(8);
    expect(cepWithoutMaskForSP.includes('-')).toBe(false);
  });
});
