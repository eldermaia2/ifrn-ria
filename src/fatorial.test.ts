import fatorial from './fatorial';

describe('Função Fatorial', () => {
  test('deve calcular o fatorial de um número positivo', () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(4)).toBe(24);
    expect(fatorial(1)).toBe(1);
  });

  test('deve retornar 1 quando a entrada for 0', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('deve retornar uma mensagem de erro ou entrada inválida para números negativos', () => {
    expect(fatorial(-1)).toBe('Entrada inválida');
    expect(fatorial(-5)).toBe('Entrada inválida');
  });
});
