const { celular } = require('gerador-br');

describe('celular', () => {
  it('Generates a random cellphone number without mask', () => {
    const result = celular();
    expect(result.length).toBe(11); // 9 digits + 2 digits DDD
    expect(/^\d{11}$/.test(result)).toBe(true); // Check if it only contains digits
  });

  it('Generates a random cellphone number with mask', () => {
    const result = celular(true);
    expect(result.length).toBe(15); // (DDD) 9XXXX-XXXX
    expect(/^\(\d{2}\) \d{5}-\d{4}$/.test(result)).toBe(true); // Check the format
  });

  it('Generates a cellphone number for a specific state without mask', () => {
    const state = 'AL';
    const result = celular(false, state);
    expect(result.startsWith('82')).toBe(true); // Check if DDD corresponds to "AL"
    expect(result.length).toBe(11);
  });

  it('Generates a cellphone number for a specific state with mask', () => {
    const state = 'AC';
    const result = celular(true, state);
    expect(result.startsWith('(68)')).toBe(true); // Check if DDD corresponds to "AC"
    expect(result.length).toBe(15);
  });

  it('Generates a cellphone number with a specific operator', () => {
    const operator = 'Claro';
    const result = celular(false, '', operator);
    expect(result.length).toBe(11);
    expect(result.charAt(2)).toBe('9'); // Assuming the operator code for Claro starts with '9'
  });

  it('Generates a cellphone number with mask, specific state, and operator', () => {
    const state = 'DF';
    const operator = 'Vivo';
    const result = celular(true, state, operator);
    expect(result.startsWith('(61)')).toBe(true); // Check if DDD corresponds to "DF"
    expect(result.charAt(5)).toBe('9'); // Assuming operator code starts with '9'
    expect(result.length).toBe(15);
  });
});
