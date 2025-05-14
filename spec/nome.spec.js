const { nome } = require('gerador-br');

describe('Nome Generator', () => {
  it('should generate a random name', () => {
    const name = nome.aleatorio();
    expect(typeof name).toBe('string');
    expect(name.length).toBeGreaterThan(0);
  });

  it('should generate a random full name', () => {
    const fullName = nome.aleatorioCompleto();
    expect(typeof fullName).toBe('string');
    expect(fullName.length).toBeGreaterThan(0);
  });

  it('should generate a random male name', () => {
    const maleName = nome.masculino();
    expect(typeof maleName).toBe('string');
    expect(maleName.length).toBeGreaterThan(0);
  });

  it('should generate a random full male name', () => {
    const fullMaleName = nome.masculinoCompleto();
    expect(typeof fullMaleName).toBe('string');
    expect(fullMaleName.length).toBeGreaterThan(0);
  });

  it('should generate a random female name', () => {
    const femaleName = nome.feminino();
    expect(typeof femaleName).toBe('string');
    expect(femaleName.length).toBeGreaterThan(0);
  });

  it('should generate a random full female name', () => {
    const fullFemaleName = nome.femininoCompleto();
    expect(typeof fullFemaleName).toBe('string');
    expect(fullFemaleName.length).toBeGreaterThan(0);
  });

  it('should generate a random mother name', () => {
    const motherName = nome.mae();
    expect(typeof motherName).toBe('string');
    expect(motherName.length).toBeGreaterThan(0);
  });

  it('should generate a random full mother name', () => {
    const fullMotherName = nome.maeCompleto();
    expect(typeof fullMotherName).toBe('string');
    expect(fullMotherName.length).toBeGreaterThan(0);
  });

  it('should generate a random father name', () => {
    const fatherName = nome.pai();
    expect(typeof fatherName).toBe('string');
    expect(fatherName.length).toBeGreaterThan(0);
  });

  it('should generate a random full father name', () => {
    const fullFatherName = nome.paiCompleto();
    expect(typeof fullFatherName).toBe('string');
    expect(fullFatherName.length).toBeGreaterThan(0);
  });

  it('should generate a random middle name', () => {
    const middleName = nome.doMeio();
    expect(typeof middleName).toBe('string');
    expect(middleName.length).toBeGreaterThan(0);
  });

  it('should generate a random surname', () => {
    const surname = nome.sobrenome();
    expect(typeof surname).toBe('string');
    expect(surname.length).toBeGreaterThan(0);
  });
});
