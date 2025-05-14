const { certidao } = require('gerador-br');

describe('certidao.js', () => {
  it('Geração de número de certidão de nascimento com máscara', () => {
    const result = certidao.nascimento(true);
    // Verifica a máscara do número de certidão
    expect(result).toMatch(/^\d{6} \d{2} \d{4} 1001 \d \d{5} \d{3} \d{7}$/);
  });

  it('Geração de número de certidão de nascimento sem máscara', () => {
    const result = certidao.nascimento(false);
    // Verifica a ausência da máscara no número de certidão
    expect(result).toMatch(/^\d{32}$/);
  });

  it('Geração de número de certidão de casamento com máscara', () => {
    const result = certidao.casamento(true);
    // Verifica a máscara do número de certidão
    expect(result).toMatch(/^\d{6} \d{2} \d{4} 2001 \d \d{5} \d{3} \d{7}$/);
  });

  it('Geração de número de certidão de casamento sem máscara', () => {
    const result = certidao.casamento(false);
    // Verifica a ausência da máscara no número de certidão
    expect(result).toMatch(/^\d{32}$/);
  });

  it('Geração de número de certidão de óbito com máscara', () => {
    const result = certidao.obito(true);
    // Verifica a máscara do número de certidão
    expect(result).toMatch(/^\d{6} \d{2} \d{4} 3001 \d \d{5} \d{3} \d{7}$/);
  });

  it('Geração de número de certidão de óbito sem máscara', () => {
    const result = certidao.obito(false);
    // Verifica a ausência da máscara no número de certidão
    expect(result).toMatch(/^\d{32}$/);
  });

  it('Geração de objeto detalhado para certidão de nascimento', () => {
    const result = certidao.nascimentoObj();
    expect(result.tipoCertidao).toBe('Nascimento');
    expect(result.cartorio).toMatch(/^\d{6}$/);
    expect(result.estado).toMatch(/^\d{2}$/);
    expect(result.anoRegistro).toMatch(/^\d{4}$/);
    expect(result.tipoLivro).toBe('1001');
  });

  it('Geração de objeto detalhado para certidão de casamento', () => {
    const result = certidao.casamentoObj();
    expect(result.tipoCertidao).toBe('Casamento');
    expect(result.cartorio).toMatch(/^\d{6}$/);
    expect(result.estado).toMatch(/^\d{2}$/);
    expect(result.anoRegistro).toMatch(/^\d{4}$/);
    expect(result.tipoLivro).toBe('2001');
  });

  it('Geração de objeto detalhado para certidão de óbito', () => {
    const result = certidao.obitoObj();
    expect(result.tipoCertidao).toBe('Óbito');
    expect(result.cartorio).toMatch(/^\d{6}$/);
    expect(result.estado).toMatch(/^\d{2}$/);
    expect(result.anoRegistro).toMatch(/^\d{4}$/);
    expect(result.tipoLivro).toBe('3001');
  });

  it('Geração de certidão aleatória', () => {
    const result = certidao.aleatoriaObj();
    expect(result.tipoCertidao).toMatch(/^(Nascimento|Casamento|Óbito)$/);
    expect(result.cartorio).toMatch(/^\d{6}$/);
    expect(result.estado).toMatch(/^\d{2}$/);
    expect(result.anoRegistro).toMatch(/^\d{4}$/);
  });

  it('Geração de certidão aleatória com máscara', () => {
    const result = certidao.aleatoria();
    expect(result).toMatch(/^\d{6} \d{2} \d{4} \d{4} \d \d{5} \d{3} \d{7}$/);
  });

  it('Geração de certidão aleatória sem máscara', () => {
    const result = certidao.aleatoria(false);
    expect(result).toMatch(/^\d{32}$/);
  });
});
