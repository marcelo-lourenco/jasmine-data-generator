const { renavam, renavamDV } = require('gerador-br');

describe('RENAVAM Generator', () => {
  it('should generate a valid RENAVAM number', () => {
    const generatedRenavam = renavam();
    expect(generatedRenavam.length).toBe(11); // 11 digits
    expect(generatedRenavam.match(/\d/g).length).toBe(11); // 11 digits
  });
});

