const fatorial = require('./fatorial');

describe('Função Fatorial', () => {
  // Teste para números positivos
  test('deve calcular o fatorial de um número positivo', () => {
    expect(fatorial(5)).toBe(120);
    expect(fatorial(4)).toBe(24);
    expect(fatorial(1)).toBe(1);
  });

  // Teste para o número 0
  test('deve retornar 1 quando a entrada for 0', () => {
    expect(fatorial(0)).toBe(1);
  });

  // Teste para números negativos
  test('deve retornar uma mensagem de erro ou entrada inválida para números negativos', () => {
    expect(fatorial(-1)).toBe('Entrada inválida');
    expect(fatorial(-5)).toBe('Entrada inválida');
  });
});
