const { cartaoCredito } = require('gerador-br');

describe('Cartão de Crédito Generator', () => {
  it('should generate a valid credit card number without mask', () => {
    const creditCardData = cartaoCredito(false);
    expect(typeof creditCardData.numero).toBe('string');
    expect(creditCardData.numero.length).toBe(16);
  });

  it('should generate a valid credit card number with mask', () => {
    const creditCardData = cartaoCredito(true);
    expect(typeof creditCardData.numero).toBe('string');
    expect(creditCardData.numero.length).toBe(19); // formato: xxxx xxxx xxxx xxxx
    expect(creditCardData.numero.split(' ').length).toBe(4);
  });

  it('should generate a valid CVV', () => {
    const creditCardData = cartaoCredito();
    expect(typeof creditCardData.cvv).toBe('string');
    expect(creditCardData.cvv.length).toBe(3);
  });

  it('should generate a valid expiration date', () => {
    const creditCardData = cartaoCredito();
    expect(typeof creditCardData.dataExpiracao).toBe('string');
    const [day, month, year] = creditCardData.dataExpiracao.split('/').map(Number);
    expect(day > 0 && day <= 31).toBe(true);
    expect(month > 0 && month <= 12).toBe(true);
    expect(year >= new Date().getFullYear()).toBe(true);
  });

  it('should generate a valid titular name', () => {
    const fullName = 'João Santos da Silva';
    const creditCardData = cartaoCredito(false, fullName);
    expect(creditCardData.nomeTitular).toBe('JOÃO S SILVA');
  });
});