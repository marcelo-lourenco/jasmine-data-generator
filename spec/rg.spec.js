const { rg, rgDV } = require('gerador-br');

describe('RG Generator', () => {
  it('should generate a valid RG with mask', () => {
    const rgWithMask = rg(true);
    expect(rgWithMask.length).toBe(12); // 9 digits + 2 separators + 1 hyphen
    expect(rgWithMask.match(/\d/g).length).toBeLessThanOrEqual(9); // 9 digits
    expect(rgWithMask.match(/\./g).length).toBe(2); // 2 dots
    expect(rgWithMask.match(/-/g).length).toBe(1); // 1 hyphen
  });

  it('should generate a valid RG without mask', () => {
    const rgWithoutMask = rg(false);
    expect(rgWithoutMask.length).toBeLessThanOrEqual(9); // 9 dig
    expect(rgWithoutMask.match(/\d/g).length).toBeLessThanOrEqual(9); // 9 dig
  });
});
