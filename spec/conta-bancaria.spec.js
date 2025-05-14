const { contaBancaria } = require('gerador-br');

describe('Conta Bancária Generator', () => {
  it('should generate a valid Banco do Brasil account', () => {
    const account = contaBancaria('Banco do Brasil');
    expect(account.codigoBanco).toBe('1');
    expect(account.nomeBanco).toBe('Banco do Brasil');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(5);
    expect(account.conta.length).toBeLessThanOrEqual(10);
    // Assert DV presence
    expect(account.agenciaDv.length).toBeLessThanOrEqual(1);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid Bradesco account', () => {
    const account = contaBancaria('Bradesco');
    expect(account.codigoBanco).toBe('237');
    expect(account.nomeBanco).toBe('Bradesco');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(5);
    expect(account.conta.length).toBeLessThanOrEqual(8);
    // Assert DV presence
    expect(account.agenciaDv.length).toBeLessThanOrEqual(1);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid Caixa account', () => {
    const account = contaBancaria('Caixa');
    expect(account.codigoBanco).toBe('104');
    expect(account.nomeBanco).toBe('Caixa');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(4);
    expect(account.conta.length).toBeLessThanOrEqual(13);
    // Assert DV presence
    expect(account.agenciaDv.length).toBe(0);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid Citibank account', () => {
    const account = contaBancaria('Citibank');
    expect(account.codigoBanco).toBe('745');
    expect(account.nomeBanco).toBe('Citibank');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(5);
    expect(account.conta.length).toBeLessThanOrEqual(9);
    // Assert DV presence
    expect(account.agenciaDv.length).toBe(0);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid HSBC account', () => {
    const account = contaBancaria('HSBC');
    expect(account.codigoBanco).toBe('296');
    expect(account.nomeBanco).toBe('HSBC');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(8);
    expect(account.conta.length).toBeLessThanOrEqual(8);
    // Assert DV presence
    expect(account.agenciaDv.length).toBe(0);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid Itaú account', () => {
    const account = contaBancaria('Itaú');
    expect(account.codigoBanco).toBe('341');
    expect(account.nomeBanco).toBe('Itaú');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(4);
    expect(account.conta.length).toBeLessThanOrEqual(11);
    // Assert DV presence
    expect(account.agenciaDv.length).toBe(0);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid Santander account', () => {
    const account = contaBancaria('Santander');
    expect(account.codigoBanco).toBe('33');
    expect(account.nomeBanco).toBe('Santander');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(4);
    expect(account.conta.length).toBeLessThanOrEqual(10);
    // Assert DV presence
    expect(account.agenciaDv.length).toBe(0);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid account for a random bank', () => {
    const account = contaBancaria();
    // Assert bank code is valid
    const validBankCodes = ['1', '237', '104', '745', '296', '341', '33'];
    expect(validBankCodes).toContain(account.codigoBanco);
    // Assert bank name is valid
    const validBankNames = ['Banco do Brasil', 'Bradesco', 'Caixa', 'Citibank', 'HSBC', 'Itaú', 'Santander'];
    expect(validBankNames).toContain(account.nomeBanco);
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(8);
    expect(account.conta.length).toBeLessThanOrEqual(13);
    // Assert DV presence
    expect(account.agenciaDv.length).toBeLessThanOrEqual(1);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid account for a bank by code', () => {
    const account = contaBancaria('1');
    expect(account.codigoBanco).toBe('1');
    expect(account.nomeBanco).toBe('Banco do Brasil');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(5);
    expect(account.conta.length).toBeLessThanOrEqual(10);
    // Assert DV presence
    expect(account.agenciaDv.length).toBeLessThanOrEqual(1);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });

  it('should generate a valid account for a bank by name (case insensitive)', () => {
    const account = contaBancaria('bAnCo dO bRaSiL');
    expect(account.codigoBanco).toBe('1');
    expect(account.nomeBanco).toBe('Banco do Brasil');
    // Assert agency and account format
    expect(account.agencia.length).toBeLessThanOrEqual(5);
    expect(account.conta.length).toBeLessThanOrEqual(10);
    // Assert DV presence
    expect(account.agenciaDv.length).toBeLessThanOrEqual(1);
    expect(account.contaDv.length).toBeLessThanOrEqual(1);
  });
});
