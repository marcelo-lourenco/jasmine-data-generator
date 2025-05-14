const { codigoOperadora } = require('gerador-br');

describe('Operadora Generator', () => {
  it('should generate a random operator code', () => {
    const code = codigoOperadora();
    expect(typeof code).toBe('number');
    expect(code).toBeGreaterThan(0);
  });

  it('should generate a valid operator code for a given operator name', () => {
    const operators = ['Claro', 'Oi', 'Tim', 'Vivo'];
    operators.forEach((operator) => {
      const code = codigoOperadora(operator);
      expect(typeof code).toBe('number');
      expect(code).toBeGreaterThan(0);
    });
  });

  it('should return a random operator code if the operator name is invalid', () => {
    const code = codigoOperadora('InvalidOperator');
    expect(typeof code).toBe('number');
    expect(code).toBeGreaterThan(0);
  });
});
