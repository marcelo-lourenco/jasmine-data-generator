const { banco, listaCodigosBancos} = require('gerador-br');

const expectedBanks = {
  1: {
    codigoBanco: '1',
    razaoSocial: 'BANCO DO BRASIL S.A.',
    nomeBanco: 'BANCO DO BRASIL S.A.',
    ispb: '00000000',
  },
  77: {
    codigoBanco: '77',
    razaoSocial: 'BANCO INTER S.A.',
    nomeBanco: 'BANCO INTER',
    ispb: '00416968',
  },
  422: {
    codigoBanco: '422',
    nomeBanco: 'BANCO SAFRA S.A.',
    razaoSocial: 'BANCO SAFRA S.A.',
    ispb: '58160789',
  },
};

describe('banco', () => {
  it('Should return a random bank when no code is provided', () => {
    const result = banco();
    const bankCodes = listaCodigosBancos();
    expect(bankCodes.includes(Number(result.codigoBanco))).toBe(true);
  });

  it('Must return Banco do Brasil data when code 1 is provided', () => {
    const result = banco(1);
    expect(result).toEqual(expectedBanks[1]);
  });

  it('Must return Inter data when code 77 is provided', () => {
    const result = banco(77);
    expect(result).toEqual(expectedBanks[77]);
  });

  it('Must return Safra data when code 422 is provided', () => {
    const result = banco(422);
    expect(result).toEqual(expectedBanks[422]);
  });

  it('Should return a random bank when an invalid code is provided', () => {
    const result = banco(999);
    const bankCodes = listaCodigosBancos();
    expect(bankCodes.includes(Number(result.codigoBanco))).toBe(true);
  });
});

describe('listaCodigosBancos', () => {
  it('Should return a list of bank codes', () => {
    const result = listaCodigosBancos();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});
