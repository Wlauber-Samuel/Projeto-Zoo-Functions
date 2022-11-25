const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se o dia passado é um dia válido', () => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    expect(() => getOpeningHours('Segunda', validDays)).toThrow('The day must be valid. Example: Monday');
  });

  it('Verifica se o dia passado é um dia válido', () => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    expect(getOpeningHours('Monday', '09:00-AM', validDays)).toBe('The zoo is closed');
  });

  it('Verifica se o zoològico está aberto ou fechado', () => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    expect(getOpeningHours('Tuesday', '09:00-AM', validDays)).toBe('The zoo is open');
  });

  it('Verifica se o zoològico está aberto ou fechado', () => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    expect(getOpeningHours('Wednesday', '09:00-PM', validDays)).toBe('The zoo is closed');
  });

  it('Verifica se a formatação do horário passado está correta', () => {
    const formatInValid = 'quarta, 09:aa-PM';
    expect(() => getOpeningHours('Friday', formatInValid)).toThrow('The hour should represent a number');
  });

  it('Verifica se a função lança uma exceção com a mensagem: "The hour should represent a number" quando passados Saturday e C9:00-AM como argumentos', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Verifica se a função lança uma exceção com a mensagem: "The hour should represent a number" quando passados Sunday e 09:c0-AM como argumentos', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Verifica se a função lança uma exceção com a mensagem: "The hour should represent a number" quando passados Monday e 13:00-AM como argumentos', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('Verifica se a função lança uma exceção com a mensagem: "The hour should represent a number" quando passados Tuesday e 09:60-AM como argumentos', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });

});
