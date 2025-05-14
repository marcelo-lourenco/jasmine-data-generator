const { inscricaoEstadual } = require('gerador-br');

describe('Inscrição Estadual', () => {
  describe('Validação de formato', () => {
    it('Deve gerar uma inscrição estadual válida para o Acre (AC)', () => {
      const ie = inscricaoEstadual('AC');
      expect(ie).toMatch(/^\d{2}\.\d{8}\d$/);
    });

    it('Deve gerar uma inscrição estadual válida para Alagoas (AL)', () => {
      const ie = inscricaoEstadual('AL');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Amapá (AP)', () => {
      const ie = inscricaoEstadual('AP');
      expect(ie).toMatch(/^\d{2}\.\d{7}\d$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Amazonas (AM)', () => {
      const ie = inscricaoEstadual('AM');
      expect(ie).toMatch(/^\d{9}\d$/);
    });

    it('Deve gerar uma inscrição estadual válida para a Bahia (BA)', () => {
      const ie = inscricaoEstadual('BA');
      expect(ie).toMatch(/^\d{8}-\d{2}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Ceará (CE)', () => {
      const ie = inscricaoEstadual('CE');
      expect(ie).toMatch(/^\d{10}$/);
    });

    it('Deve gerar uma inscrição estadual com formato válido para o Distrito Federal (DF)', () => {
      const ie = inscricaoEstadual('DF');
      // Verifica o formato da inscrição estadual "07YY.NNNNNDV"
      expect(ie).toMatch(/^07\d{2}\.\d{5}\d{2}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Espírito Santo (ES)', () => {
      const ie = inscricaoEstadual('ES');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Goiás (GO)', () => {
      const ie = inscricaoEstadual('GO');
      expect(ie).toMatch(/^\d{8}\d$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Maranhão (MA)', () => {
      const ie = inscricaoEstadual('MA');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Mato Grosso (MT)', () => {
      const ie = inscricaoEstadual('MT');
      expect(ie).toMatch(/^\d{11}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Mato Grosso do Sul (MS)', () => {
      const ie = inscricaoEstadual('MS');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Minas Gerais (MG)', () => {
      const ie = inscricaoEstadual('MG');
      expect(ie).toMatch(/^\d{13}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Pará (PA)', () => {
      const ie = inscricaoEstadual('PA');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para a Paraíba (PB)', () => {
      const ie = inscricaoEstadual('PB');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Paraná (PR)', () => {
      const ie = inscricaoEstadual('PR');
      expect(ie).toMatch(/^\d{8}-\d{2}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Pernambuco (PE)', () => {
      const ie = inscricaoEstadual('PE');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Piauí (PI)', () => {
      const ie = inscricaoEstadual('PI');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Rio de Janeiro (RJ)', () => {
      const ie = inscricaoEstadual('RJ');
      expect(ie).toMatch(/^\d{8}\.\d{2}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Rio Grande do Norte (RN)', () => {
      const ie = inscricaoEstadual('RN');
      expect(ie).toMatch(/^\d{8}-\d$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Rio Grande do Sul (RS)', () => {
      const ie = inscricaoEstadual('RS');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Rondônia (RO)', () => {
      const ie = inscricaoEstadual('RO');
      expect(ie).toMatch(/^\d{8}-\d{1}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Roraima (RR)', () => {
      const ie = inscricaoEstadual('RR');
      expect(ie).toMatch(/^\d{8}$/);
    });

    it('Deve gerar uma inscrição estadual válida para Santa Catarina (SC)', () => {
      const ie = inscricaoEstadual('SC');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para São Paulo (SP)', () => {
      const ie = inscricaoEstadual('SP');
      expect(ie).toMatch(/^\d{12}\d$/);
    });

    it('Deve gerar uma inscrição estadual válida para Sergipe (SE)', () => {
      const ie = inscricaoEstadual('SE');
      expect(ie).toMatch(/^\d{9}$/);
    });

    it('Deve gerar uma inscrição estadual válida para o Tocantins (TO)', () => {
      const ie = inscricaoEstadual('TO');
      expect(ie).toMatch(/^\d{8}-\d{1}$/);
    });
  });

  describe('Validação de estado aleatório', () => {
    it('Deve gerar uma inscrição estadual com um estado aleatório quando nenhum estado é informado', () => {
      const ie = inscricaoEstadual();
      expect(typeof ie).toBe('string');
    });
  });
});
