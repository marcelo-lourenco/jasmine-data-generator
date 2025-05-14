const { email, apelido } = require('gerador-br'); // Assumindo que 'apelido' também é exportado se necessário, embora não seja usado diretamente nos testes.

describe('Email Generator', () => {
  it('should generate a valid email address without full name', () => {
    const generatedEmail = email();
    const parts = generatedEmail.split('@');
    expect(parts.length).toBe(2);
    expect(parts[0].length).toBeGreaterThan(0);
    expect(parts[1].length).toBeGreaterThan(0);
  });

  it('should generate a valid email address with full name', () => {
    const fullName = 'John Doe';
    const generatedEmail = email(fullName);
    const parts = generatedEmail.split('@');
    expect(parts.length).toBe(2);
    expect(parts[0].length).toBeGreaterThan(0);
    expect(parts[1].length).toBeGreaterThan(0);
    expect(parts[0]).toBe(fullName.toLowerCase().replace(/ /g, '.').split('.').slice(0, 2)
      .join('.'));
  });

  it('should generate a valid email address with a nickname (similar to without full name)', () => {
    // Este teste é funcionalmente idêntico ao primeiro, pois `email()` sem argumentos
    // já usa um nome/apelido aleatório internamente.
    const generatedEmail = email();
    const parts = generatedEmail.split('@');
    expect(parts.length).toBe(2);
    expect(parts[0].length).toBeGreaterThan(0);
    expect(parts[1].length).toBeGreaterThan(0);
  });
});
