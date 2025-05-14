const { cns, cnsDV } = require('gerador-br');


describe('Brazilian National Health Card (CNS) Generator', () => {
  it('Generates CNS without mask and random type', () => {
    const result = cns(false);
    // Verifies if the result is a valid CNS with 15 digits
    expect(result.length).toBe(15);
    expect(result).toMatch(/^\d{15}$/);
  });

  it('Generates CNS without mask for SUS beneficiary', () => {
    const result = cns(false, 'beneficiario');
    // Verifies if the first digit is 1 or 2
    expect(['1', '2'].includes(result.charAt(0))).toBe(true);
    expect(result.length).toBe(15);
    expect(result).toMatch(/^\d{15}$/);
  });

  it('Generates CNS without mask for healthcare professional', () => {
    const result = cns(false, 'profissional');
    // Verifies if the first digit is 7, 8, or 9
    expect(['7', '8', '9'].includes(result.charAt(0))).toBe(true);
    expect(result.length).toBe(15);
    expect(result).toMatch(/^\d{15}$/);
  });

  it('Generates CNS with mask and random type', () => {
    const result = cns(true);
    // Verifies if the result is in the masked CNS format (XXX XXXX XXXX XXXX)
    expect(result.length).toBe(18);
    expect(result).toMatch(/^\d{3} \d{4} \d{4} \d{4}$/);
  });

  it('Generates CNS with mask for SUS beneficiary', () => {
    const result = cns(true, 'beneficiario');
    // Verifies if the first digit is 1 or 2
    expect(['1', '2'].includes(result.charAt(0))).toBe(true);
    expect(result.length).toBe(18);
    expect(result).toMatch(/^\d{3} \d{4} \d{4} \d{4}$/);
  });

  it('Generates CNS with mask for healthcare professional', () => {
    const result = cns(true, 'profissional');
    // Verifies if the first digit is 7, 8, or 9
    expect(['7', '8', '9'].includes(result.charAt(0))).toBe(true);
    expect(result.length).toBe(18);
    expect(result).toMatch(/^\d{3} \d{4} \d{4} \d{4}$/);
  });
});
