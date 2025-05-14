const { genero } = require('gerador-br');

describe('Genero Generator', () => {
  it('should return "Feminino" for input "f"', () => {
    expect(genero('f')).toBe('Feminino');
  });

  it('should return "Feminino" for input "F"', () => {
    expect(genero('F')).toBe('Feminino');
  });

  it('should return "Masculino" for input "m"', () => {
    expect(genero('m')).toBe('Masculino');
  });

  it('should return "Masculino" for input "M"', () => {
    expect(genero('M')).toBe('Masculino');
  });

  it('should return "Intersexo" for input "i"', () => {
    expect(genero('i')).toBe('Intersexo');
  });

  it('should return "Intersexo" for input "I"', () => {
    expect(genero('I')).toBe('Intersexo');
  });

  const randomOutputs = ['Feminino', 'Masculino'];

  it('should return "Feminino" or "Masculino" for null input', () => {
    expect(randomOutputs).toContain(genero(null));
  });

  it('should return "Feminino" or "Masculino" for undefined input', () => {
    expect(randomOutputs).toContain(genero(undefined));
  });

  it('should return "Feminino" or "Masculino" for no input', () => {
    expect(randomOutputs).toContain(genero());
  });

  it('should return "Feminino" or "Masculino" for invalid string input "x"', () => {
    expect(randomOutputs).toContain(genero('x'));
  });

  it('should return "Feminino" or "Masculino" for invalid numeric input 123', () => {
    expect(randomOutputs).toContain(genero(123));
  });
});
