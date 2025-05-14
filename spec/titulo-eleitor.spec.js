const { teDV, tituloEleitor } = require('gerador-br');

describe('Título de Eleitor Generator', () => {
  it('should generate a valid title of voter without mask and with random state', () => {
    const tituloEleitorWithoutMask = tituloEleitor();
    expect(tituloEleitorWithoutMask.length).toBe(12); // 12 digits
    expect(tituloEleitorWithoutMask.match(/\d/g).length).toBe(12); // 12 digits
  });

  it('should generate a valid title of voter with mask and with random state', () => {
    const tituloEleitorWithMask = tituloEleitor(true);
    expect(tituloEleitorWithMask.length).toBe(14); // 12 digits + 3 spaces
    expect(tituloEleitorWithMask.match(/\d/g).length).toBe(12); // 12 digits
    expect(tituloEleitorWithMask.match(/ /g).length).toBe(2); // 2 spaces
  });

  it('should generate a valid title of voter without mask and with specific state', () => {
    const tituloEleitorWithoutMask = tituloEleitor(false, 'SC');
    expect(tituloEleitorWithoutMask.length).toBe(12); // 12 digits
    expect(tituloEleitorWithoutMask.match(/\d/g).length).toBe(12); // 12 digits
  });

  it('should generate a valid title of voter with mask and with specific state', () => {
    const tituloEleitorWithMask = tituloEleitor(true, 'PR');
    expect(tituloEleitorWithMask.length).toBe(14); // 12 digits + 2 spaces
    expect(tituloEleitorWithMask.match(/\d/g).length).toBe(12); // 12 digits
    expect(tituloEleitorWithMask.match(/ /g).length).toBe(2); // 2 spaces
  });
});

