const { placaAntiga, placaMercosul } = require('gerador-br');

describe('Placa Generator', () => {
  describe('Placa Antiga', () => {
    it('should generate a valid old license plate without mask', () => {
      const placaAntigaWithoutMask = placaAntiga(false);
      expect(placaAntigaWithoutMask.length).toBe(7); // 3 letters + 4 digits
      expect(placaAntigaWithoutMask.match(/[A-Z]/g).length).toBe(3); // 3 uppercase letters
      expect(placaAntigaWithoutMask.match(/\d/g).length).toBe(4); // 4 digits
    });

    it('should generate a valid old license plate with mask', () => {
      const placaAntigaWithMask = placaAntiga(true);
      expect(placaAntigaWithMask.length).toBe(8); // 3 letters + 4 digits + 1 hyphen
      expect(placaAntigaWithMask.match(/[A-Z]/g).length).toBe(3); // 3 uppercase letters
      expect(placaAntigaWithMask.match(/\d/g).length).toBe(4); // 4 digits
      expect(placaAntigaWithMask.match(/-/g).length).toBe(1); // 1 hyphen
    });
  });

  describe('Placa Mercosul', () => {
    it('should generate a valid Mercosul license plate without mask', () => {
      const placaMercosulWithoutMask = placaMercosul(false);
      expect(placaMercosulWithoutMask.length).toBe(7); // 3 letters + 1 digit + 1 letter + 2 digits
      expect(placaMercosulWithoutMask.match(/[A-Z]/g).length).toBe(4); // 4 uppercase letters
      expect(placaMercosulWithoutMask.match(/\d/g).length).toBe(3); // 3 digits
    });

    it('should generate a valid Mercosul license plate with mask', () => {
      const placaMercosulWithMask = placaMercosul(true);
      expect(placaMercosulWithMask.length).toBe(8); // 3 letters + 1 digit + 1 letter + 2 digits + 1 hyphen
      expect(placaMercosulWithMask.match(/[A-Z]/g).length).toBe(4); // 4 uppercase letters
      expect(placaMercosulWithMask.match(/\d/g).length).toBe(3); // 3 digits
      expect(placaMercosulWithMask.match(/-/g).length).toBe(1); // 1 hyphen
    });
  });
});
