const { cnh } = require('gerador-br');

describe('CNH Generator', () => {
  it('should generate a valid CNH', () => {
    const generatedCNH = cnh();
    expect(generatedCNH.length).toBe(11); // 11 digits
    expect(generatedCNH.match(/\d/g).length).toBe(11); // 11 digits
  });
});
