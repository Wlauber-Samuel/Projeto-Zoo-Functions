const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Verifica se o dia passado é um dia válido', () => {
    const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    expect(() => getOpeningHours('Segunda')).toThrow('The day must be valid. Example: Monday')
    });

    it('Verifica se o dia passado é um dia válido', () => {
        const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed')
        });

    it('Verifica se o zoològico está aberto ou fechado', () => {
        const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open')
        });

    it('Verifica se o zoològico está aberto ou fechado', () => {
        const validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed')
        });

    it('Verifica se a formatação do horário passado está correta', () => {
        const formatInValid = 'quarta, 09:aa-PM'
        expect(() => getOpeningHours('Friday',formatInValid)).toThrow('The hour should represent a number')
    });

    it('Verifica se a função não faz diferenciação entre maiúsculas e minúsculas', () => {
       const NotCaseSensitive = 'tuesday, 09:00-AM'
       expect(() => getOpeningHours('Tuesday, 09:00-AM')).toThrow('The zoo is open')
    });


});