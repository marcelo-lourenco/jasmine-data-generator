const { passaporte } = require('gerador-br');

describe('Passport Generator', () => {
  it('should generate a valid passport number', () => {
    const passportNumber = passaporte();
    expect(passportNumber.length).toBe(9); // 2 letters + 7 digits
    // Verifica se os dois primeiros caracteres são letras maiúsculas
    expect(passportNumber.slice(0, 2)).toMatch(/[A-Z]{2}/);
    // Verifica se os últimos sete caracteres são dígitos
    expect(passportNumber.slice(2)).toMatch(/\d{7}/);
  });

  it('should start with two uppercase letters', () => {
    const letters = passaporte().slice(0, 2);
    expect(letters).toMatch(/[A-Z]{2}/);
    expect(letters.length).toBe(2);
  });

  it('should end with seven digits', () => {
    const numbers = passaporte().slice(2);
    expect(numbers).toMatch(/\d{7}/);
    expect(numbers.length).toBe(7);
  });
});
