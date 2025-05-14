const { dataNascimento } = require('gerador-br');

function getYearFromDate(dateString) {
  const [day, month, year] = dateString.split('/');
  return parseInt(year, 10);
}

describe('Data Nascimento Generator', () => {
  it('should generate a valid date in DD/MM/AAAA format', () => {
    const dateParts = dataNascimento().split('/');
    expect(dateParts.length).toBe(3);
    expect(dateParts[0].length).toBe(2);
    expect(dateParts[1].length).toBe(2);
    expect(dateParts[2].length).toBe(4);
  });

  it('should generate a date between 18 and 80 years ago', () => {
    const now = new Date();
    const ageInYears = now.getFullYear() - getYearFromDate(dataNascimento());
    expect(ageInYears >= 18 && ageInYears <= 80).toBe(true);
  });

  it('should generate a date for a specific age', () => {
    const specificAge = 30;
    const now = new Date();
    const birthYear = now.getFullYear() - specificAge;
    const generatedDate = dataNascimento(specificAge);
    const generatedYear = getYearFromDate(generatedDate);
    expect(generatedYear).toBe(birthYear);
  });

  it('should generate a date within a specific age range', () => {
    const ageRange = [20, 40];
    const now = new Date();
    const generatedDate = dataNascimento(ageRange);
    const ageInYears = now.getFullYear() - getYearFromDate(generatedDate);
    expect(ageInYears >= ageRange[0] && ageInYears <= ageRange[1]).toBe(true);
  });

  it('should handle age range with min > max correctly', () => {
    const ageRange = [40, 20]; // min > max
    const now = new Date();
    const generatedDate = dataNascimento(ageRange);
    const ageInYears = now.getFullYear() - getYearFromDate(generatedDate);
    // Expecting the same result as [20, 40] because the function should swap them
    expect(ageInYears >= ageRange[1] && ageInYears <= ageRange[0]).toBe(true);
  });
});
