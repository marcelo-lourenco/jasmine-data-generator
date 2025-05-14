const { ddd } = require('gerador-br');

describe('DDD Generator', () => {
  it('should generate a random DDD for a given state', () => {
    const states = ['SP', 'RJ', 'MG', 'RS', 'SC'];
    states.forEach((state) => {
      const dddValue = ddd(state);
      expect(typeof dddValue).toBe('string');
      expect(Number(dddValue)).toBeGreaterThan(0);
    });
  });

  it('should generate a random DDD for a random state', () => {
    const dddValue = ddd();
    expect(typeof dddValue).toBe('string');
    expect(Number(dddValue)).toBeGreaterThan(0);
  });
});
