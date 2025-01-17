import { FormaGeometrica, Retangulo, Circulo } from './formasgeometricas';

describe('Testando as subclasses de FormaGeometrica', () => {
  it('Deve calcular a área do retângulo corretamente', () => {
    const retangulo = new Retangulo('Retângulo', 5, 10);
    expect(retangulo.calcularArea()).toBe(50);
  });

  it('Deve calcular a área do círculo corretamente', () => {
    const circulo = new Circulo('Círculo', 7);
    const areaEsperada = Math.PI * Math.pow(7, 2);
    expect(circulo.calcularArea()).toBeCloseTo(areaEsperada, 5);
  });

  it('Deve comparar corretamente as áreas do retângulo e do círculo', () => {
    const retangulo = new Retangulo('Retângulo', 4, 4); // Área: 16
    const circulo = new Circulo('Círculo', 2); // Área: ~12.566

    const resultado = FormaGeometrica.compararAreas(retangulo, circulo);
    expect(resultado).toBe('Retângulo tem uma área maior.');
  });

  it('Deve indicar que as áreas são iguais', () => {
    const retangulo = new Retangulo('Retângulo', 3, 3); // Área: 9
    const circulo = new Circulo('Círculo', Math.sqrt(9 / Math.PI)); // Área: ~9

    const resultado = FormaGeometrica.compararAreas(retangulo, circulo);
    expect(resultado).toBe('As áreas de Retângulo e Círculo são iguais.');
  });
});
