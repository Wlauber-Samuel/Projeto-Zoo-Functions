const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna  quantidade de elefantes quando é passado "count" como parâmetro', () => {
    const received = handlerElephants('count');
    const expected = 4;
    expect(received).toBe(expected);
  });

  it('Retorna um array com a relação dos nomes de todos os elefantes quando é passado "names" como parâmetro', () => {
    const received = handlerElephants('names');
    expect(Array.isArray(received)).toBe(true);
    expect(Object.values(received).includes('Jefferson')).toEqual(true);
  });

  it('Retorna a média de idade dos elefantes quando é passado "averageAge" como parâmetro', () => {
    const received = handlerElephants('averageAge');
    const expected = 10.5;
    expect(received).toBe(expected);
  });

  it('Retorna um array com a relação de dias em que é possível visitar os elefantes quando é passado "availability" como parâmetro', () => {
    const received = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(Array.isArray(received)).toEqual(true);
    expect(received).toEqual(expected);
  });

  it ('Retorna "null" quando o parâmetro for diferente de "count, names, averageAge"', () => {
      const received = handlerElephants('abc');
      expect(received).toEqual(null);
  }); 

  it ('Retorna "undefined" quando não é passado nenhum parâmetro', () => {
    const received = handlerElephants();
    expect(received).toEqual(undefined);
  }); 

  it ('Retorna "Parâmetro inválido, é necessário uma string" quando é passado um parâmetro diferente de string', () => {
    const received = handlerElephants(25);
    expect(received).toBe('Parâmetro inválido, é necessário uma string')
  });
});
