// arquivo: formasgeometricas.test.ts

import { Retangulo, Circulo, FormaGeometrica } from "./formasgeometricas";

describe("Testes para a classe FormaGeometrica e suas subclasses", () => {
    test("Deve criar um Retângulo, calcular a área e alterar seus atributos", () => {
        const retangulo = new Retangulo(10, 5);
        expect(retangulo.calcularArea()).toBe(50);

        // Alterando atributos
        retangulo.largura = 20;
        retangulo.altura = 10;
        expect(retangulo.calcularArea()).toBe(200);
    });

    test("Deve criar um Círculo, calcular a área e alterar seu atributo", () => {
        const circulo = new Circulo(7);
        expect(circulo.calcularArea()).toBeCloseTo(153.938, 3);

        // Alterando atributo
        circulo.raio = 14;
        expect(circulo.calcularArea()).toBeCloseTo(615.752, 3);
    });

    test("Deve comparar as áreas de um Retângulo e um Círculo", () => {
        const retangulo = new Retangulo(10, 5); // Área = 50
        const circulo = new Circulo(7); // Área ≈ 153.94

        const resultado = FormaGeometrica.compararAreas(retangulo, circulo);
        expect(resultado).toBe("Círculo tem uma área maior que Retângulo.");
    });

    test("Deve comparar as áreas de dois Retângulos com áreas iguais", () => {
        const retangulo1 = new Retangulo(10, 5); // Área = 50
        const retangulo2 = new Retangulo(5, 10); // Área = 50

        const resultado = FormaGeometrica.compararAreas(retangulo1, retangulo2);
        expect(resultado).toBe("Retângulo e Retângulo possuem áreas iguais.");
    });

    test("Deve indicar que as áreas de Retângulo e Círculo são iguais", () => {
        const retangulo = new Retangulo(10, 10); // Área = 100
        const circulo = new Circulo(Math.sqrt(100 / Math.PI)); // Área ≈ 100

        const resultado = FormaGeometrica.compararAreas(retangulo, circulo);
        expect(resultado).toBe("Retângulo e Círculo possuem áreas iguais.");
    });

    test("Deve lidar com diferenças de precisão para áreas iguais", () => {
        const retangulo = new Retangulo(10, 10); // Área = 100
        const circulo = new Circulo(5.6419); // Raio ajustado para maior precisão

        const resultado = FormaGeometrica.compararAreas(retangulo, circulo);
        expect(resultado).toBe("Retângulo e Círculo possuem áreas iguais.");
    });
});
