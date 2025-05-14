const { cpf } = require('gerador-br');

describe('CPF Generator', () => {
  it('should generate a valid CPF with mask', () => {
    const cpfWithMask = cpf(true, 'SP');
    expect(cpfWithMask.length).toBe(14); // 11 digits + 3 separators + 1 hyphen
    expect(cpfWithMask.match(/\d/g).length).toBe(11); // 11 digits
    expect(cpfWithMask.match(/\./g).length).toBe(2); // 2 dots
    expect(cpfWithMask.match(/-/g).length).toBe(1); // 1 hyphen
  });

  it('should generate a valid CPF without mask', () => {
    const cpfWithoutMask = cpf(false, 'RJ');
    expect(cpfWithoutMask.length).toBe(11); // 11 digits
    expect(cpfWithoutMask.match(/\d/g).length).toBe(11); // 11 digits
  });

  it('should generate a valid CPF with random state', () => {
    const cpfWithRandomState = cpf(true);
    expect(cpfWithRandomState.length).toBe(14); // 11 digits + 3 separators + 1 hyphen
    expect(cpfWithRandomState.match(/\d/g).length).toBe(11); // 11 digits
    expect(cpfWithRandomState.match(/\./g).length).toBe(2); // 2 dots
    expect(cpfWithRandomState.match(/-/g).length).toBe(1); // 1 hyphen
  });

  it('should generate a valid CPF with a specific state', () => {
    const cpfWithSpecificState = cpf(true, 'MG');
    expect(cpfWithSpecificState.length).toBe(14); // 11 digits + 3 separators + 1 hyphen
    expect(cpfWithSpecificState.match(/\d/g).length).toBe(11); // 11 digits
    expect(cpfWithSpecificState.match(/\./g).length).toBe(2); // 2 dots
    expect(cpfWithSpecificState.match(/-/g).length).toBe(1); // 1 hyphen
  });
});
