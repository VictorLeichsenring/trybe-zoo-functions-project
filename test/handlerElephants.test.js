const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it ('Verifica se par o argumento "count" o retorno é 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se para o argumento "names" o retorno contem o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se para o argumento "averageAge" o retorno contem é um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5, 2);
  });
  it('Verifica se para o argumento "location" o retorno contem é "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se para o argumento "availability" o retorno é array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Verifica se não for passado argumento o retorno é undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
