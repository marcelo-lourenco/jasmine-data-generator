const { gerar } = require('gerador-br');
const analyzeData = require('../src/app.js');

describe('Valida geração de dados pelo gerador-br', function () {

    it('Valida a geração de um apelido', function () {
        const result = analyzeData(gerar.apelido());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de banco aleatório', function () {
        const result = analyzeData(gerar.banco());
        expect(result.primitiveType).toBe('object');
        // Valida se possui as propriedades esperadas
        expect(result.value).toBeDefined();
        expect(result.value).not.toBeNull();
        expect(result.value).toEqual(jasmine.objectContaining({
            codigoBanco: jasmine.any(String),
            nomeBanco: jasmine.any(String),
            razaoSocial: jasmine.any(String),
            ispb: jasmine.any(String)
        }));
        // Valida se o código do banco está na lista de códigos válidos
        const bankCodes = gerar.listaCodigosBancos();
        expect(bankCodes).toContain(Number(result.value.codigoBanco));
        // Valida se os campos não estão vazios
        expect(result.value.codigoBanco.length).toBeGreaterThan(0);
        expect(result.value.nomeBanco.length).toBeGreaterThan(0);
        expect(result.value.razaoSocial.length).toBeGreaterThan(0);
        expect(result.value.ispb.length).toBeGreaterThan(0);
    });

    it('Valida a geração de banco informado', function () {
        const result = analyzeData(gerar.banco(237));
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de lista de códigos de bancos', function () {
        const result = analyzeData(gerar.listaCodigosBancos());
        expect(result.isArray).toBe(true);
    });

    it('Valida a geração de cartão de crédito básico', function () {
        const result = analyzeData(gerar.cartaoCredito());
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de cartão de crédito com máscara e nome', function () {
        const result = analyzeData(gerar.cartaoCredito(true, 'João Santos da Silva'));
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de cartão de crédito sem máscara e nome', function () {
        const result = analyzeData(gerar.cartaoCredito(false, 'Maria Aparecida Reis'));
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de celular sem máscara', function () {
        const result = analyzeData(gerar.celular());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de celular com máscara', function () {
        const result = analyzeData(gerar.celular(true));
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de celular para estado específico', function () {
        const result = analyzeData(gerar.celular(false, 'SC'));
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de celular para estado e operadora', function () {
        const result = analyzeData(gerar.celular(true, 'ES', 'Vivo'));
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de cep sem máscara', function () {
        const result = analyzeData(gerar.cep());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de cep com máscara', function () {
        const result = analyzeData(gerar.cep(true));
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de certidão aleatória', function () {
        const result = analyzeData(gerar.certidao.aleatoria());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de certidão de nascimento', function () {
        const result = analyzeData(gerar.certidao.nascimento());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de objeto detalhado de certidão', function () {
        const result = analyzeData(gerar.certidao.aleatoriaObj());
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de CNH', function () {
        const result = analyzeData(gerar.cnh());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de categoria CNH', function () {
        const result = analyzeData(gerar.cnhCategoria());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de CNPJ sem máscara', function () {
        const result = analyzeData(gerar.cnpj());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de CNPJ com máscara', function () {
        const result = analyzeData(gerar.cnpj(true));
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de CNS', function () {
        const result = analyzeData(gerar.cns());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de conta bancária', function () {
        const result = analyzeData(gerar.contaBancaria());
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de CPF sem máscara', function () {
        const result = analyzeData(gerar.cpf());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de CPF com máscara', function () {
        const result = analyzeData(gerar.cpf(true));
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de cor de pele', function () {
        const result = analyzeData(gerar.corPele());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de tipo sanguíneo', function () {
        const result = analyzeData(gerar.tipoSanguineo());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de data de nascimento', function () {
        const result = analyzeData(gerar.dataNascimento());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de DDD', function () {
        const result = analyzeData(gerar.ddd());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de e-mail', function () {
        const result = analyzeData(gerar.email());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de endereço', function () {
        const result = analyzeData(gerar.endereco());
        expect(result.primitiveType).toBe('object');
    });

    it('Valida a geração de escolaridade', function () {
        const result = analyzeData(gerar.escolaridade());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de gênero', function () {
        const result = analyzeData(gerar.genero());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de orientação sexual', function () {
        const result = analyzeData(gerar.orientacaoSexual());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de identidade de gênero', function () {
        const result = analyzeData(gerar.identidadeGenero());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de inscrição estadual', function () {
        const result = analyzeData(gerar.inscricaoEstadual());
        expect(['string', 'boolean']).toContain(result.primitiveType);
    });

    it('Valida a geração de nome aleatório', function () {
        const result = analyzeData(gerar.nome.aleatorio());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de passaporte', function () {
        const result = analyzeData(gerar.passaporte());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de PIS', function () {
        const result = analyzeData(gerar.pis());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de placa antiga', function () {
        const result = analyzeData(gerar.placaAntiga());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de placa Mercosul', function () {
        const result = analyzeData(gerar.placaMercosul());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de profissão', function () {
        const result = analyzeData(gerar.profissao());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de provedor de e-mail', function () {
        const result = analyzeData(gerar.provedorEmail());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de RENAVAM', function () {
        const result = analyzeData(gerar.renavam());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de RG', function () {
        const result = analyzeData(gerar.rg());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de telefone', function () {
        const result = analyzeData(gerar.telefone());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de palavra', function () {
        const result = analyzeData(gerar.palavra());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de sentença', function () {
        const result = analyzeData(gerar.sentenca());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de parágrafo', function () {
        const result = analyzeData(gerar.paragrafo());
        expect(result.primitiveType).toBe('string');
    });

    it('Valida a geração de título de eleitor', function () {
        const result = analyzeData(gerar.tituloEleitor());
        expect(result.primitiveType).toBe('string');
    });
});
