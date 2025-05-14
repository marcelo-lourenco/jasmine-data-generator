const { endereco } = require('gerador-br');

describe('Endereço Generator', () => {
  it('should generate a valid address with mask', () => {
    const addressWithMask = endereco(true);
    expect(addressWithMask.cep.length).toBe(9);
    expect(addressWithMask.cep.slice(5, 6)).toBe('-');
    expect(typeof addressWithMask.logradouro).toBe('string');
    expect(typeof addressWithMask.numero).toBe('string');
    expect(typeof addressWithMask.complemento).toBe('string');
    expect(typeof addressWithMask.bairro).toBe('string');
    expect(typeof addressWithMask.localidade).toBe('string');
    expect(typeof addressWithMask.estado).toBe('string');
  });

  it('should generate a valid address without mask', () => {
    const addressWithoutMask = endereco(false);
    expect(addressWithoutMask.cep.length).toBe(8);
    expect(addressWithoutMask.cep.includes('-')).toBe(false);
    expect(typeof addressWithoutMask.logradouro).toBe('string');
    expect(typeof addressWithoutMask.numero).toBe('string');
    expect(typeof addressWithoutMask.complemento).toBe('string');
    expect(typeof addressWithoutMask.bairro).toBe('string');
    expect(typeof addressWithoutMask.localidade).toBe('string');
    expect(typeof addressWithoutMask.estado).toBe('string');
  });

  it('should generate a valid address for a specific state with mask', () => {
    const addressWithMaskForSP = endereco(true, 'SP');
    expect(addressWithMaskForSP.cep.length).toBe(9);
    expect(addressWithMaskForSP.cep.slice(5, 6)).toBe('-');
    expect(typeof addressWithMaskForSP.logradouro).toBe('string');
    expect(typeof addressWithMaskForSP.numero).toBe('string');
    expect(typeof addressWithMaskForSP.complemento).toBe('string');
    expect(typeof addressWithMaskForSP.bairro).toBe('string');
    expect(typeof addressWithMaskForSP.localidade).toBe('string');
    expect(addressWithMaskForSP.estado).toBe('SP');
  });

  it('should generate a valid address for a specific state without mask', () => {
    const addressWithoutMaskForSP = endereco(false, 'SP');
    expect(addressWithoutMaskForSP.cep.length).toBe(8);
    expect(addressWithoutMaskForSP.cep.includes('-')).toBe(false);
    expect(typeof addressWithoutMaskForSP.logradouro).toBe('string');
    expect(typeof addressWithoutMaskForSP.numero).toBe('string');
    expect(typeof addressWithoutMaskForSP.complemento).toBe('string');
    expect(typeof addressWithoutMaskForSP.bairro).toBe('string');
    expect(typeof addressWithoutMaskForSP.localidade).toBe('string');
    expect(addressWithoutMaskForSP.estado).toBe('SP');
  });
});
