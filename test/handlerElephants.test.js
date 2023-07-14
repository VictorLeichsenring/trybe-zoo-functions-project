const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it ('Verifica se par o argumento "count" o retorno é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se ára o argumento "names" o retorno contem o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se ára o argumento "averageAge" o retorno contem é um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });
});
