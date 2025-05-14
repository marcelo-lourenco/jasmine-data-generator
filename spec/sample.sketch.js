const { gerar } = require('gerador-br');
const analyzeData = require('../src/app.js');

// exemplos sem o gerador-br
describe('analyzeData', function () {
    it('Valida a geração de uma string', function () {
        const result = analyzeData('texto');
        expect(result.primitiveType).toBe('string');
        expect(result.detailedType).toBe('string');
        expect(result.size).toBe(5);
        expect(result.isEmpty).toBe(false);
    });

    it('Valida a geração de um número inteiro', function () {
        const result = analyzeData(10);
        expect(result.primitiveType).toBe('number');
        expect(result.detailedType).toBe('integer');
        expect(result.isFinite).toBe(true);
        expect(result.isSafeInteger).toBe(true);
    });

    it('Valida a geração de um número float', function () {
        const result = analyzeData(3.14);
        expect(result.primitiveType).toBe('number');
        expect(result.detailedType).toBe('float');
    });

    it('Valida a geração de um boolean', function () {
        const result = analyzeData(true);
        expect(result.primitiveType).toBe('boolean');
        expect(result.detailedType).toBe('boolean');
    });

    it('Valida a geração de null', function () {
        const result = analyzeData(null);
        expect(result.primitiveType).toBe('object');
        expect(result.detailedType).toBe('null');
        expect(result.isNull).toBe(true);
    });

    it('Valida a geração de undefined', function () {
        const result = analyzeData(undefined);
        expect(result.primitiveType).toBe('undefined');
        expect(result.detailedType).toBe('undefined');
        expect(result.isUndefined).toBe(true);
    });

    it('Valida a geração de NaN', function () {
        const result = analyzeData(NaN);
        expect(result.primitiveType).toBe('number');
        expect(result.isNaN).toBe(true);
    });

    it('Valida a geração de array', function () {
        const result = analyzeData([1, 2, 3]);
        expect(result.primitiveType).toBe('object');
        expect(result.detailedType).toBe('array');
        expect(result.isArray).toBe(true);
        expect(result.size).toBe(3);
        expect(result.elementTypes).toEqual(['number', 'number', 'number']);
    });

    it('Valida a geração de objeto', function () {
        const obj = { nome: 'João', idade: 20 };
        const result = analyzeData(obj);
        expect(result.primitiveType).toBe('object');
        expect(result.detailedType).toBe('object');
        expect(result.size).toBe(2);
        expect(result.properties).toContain('nome');
        expect(result.properties).toContain('idade');
    });

    it('Valida a geração de data', function () {
        const date = new Date();
        const result = analyzeData(date);
        expect(result.isDate).toBe(true);
        expect(result.detailedType).toBe('date');
        expect(result.isoValue).toBe(date.toISOString());
    });

    it('Valida a geração de regexp', function () {
        const regex = /abc/i;
        const result = analyzeData(regex);
        expect(result.isRegExp).toBe(true);
        expect(result.detailedType).toBe('regexp');
        expect(result.pattern).toBe('abc');
        expect(result.flags).toBe('i');
    });

    it('Valida a geração de erro', function () {
        const error = new Error('erro');
        const result = analyzeData(error);
        expect(result.isError).toBe(true);
        expect(result.detailedType).toBe('error');
        expect(result.name).toBe('Error');
        expect(result.message).toBe('erro');
    });

    it('Valida a geração de symbol', function () {
        const sym = Symbol('teste');
        const result = analyzeData(sym);
        expect(result.isSymbol).toBe(true);
        expect(result.detailedType).toBe('symbol');
        expect(result.description).toBe('teste');
    });
});