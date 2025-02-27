// arquivo: formasgeometricas.ts

abstract class FormaGeometrica {
    constructor(public nome: string) {}

    abstract calcularArea(): number;

    static compararAreas(forma1: FormaGeometrica, forma2: FormaGeometrica): string {
        const area1 = forma1.calcularArea();
        const area2 = forma2.calcularArea();
        const tolerancia = 0.0001; // Tolerância para diferenças de precisão

        if (Math.abs(area1 - area2) <= tolerancia) {
            return `${forma1.nome} e ${forma2.nome} possuem áreas iguais.`;
        } else if (area1 > area2) {
            return `${forma1.nome} tem uma área maior que ${forma2.nome}.`;
        } else {
            return `${forma2.nome} tem uma área maior que ${forma1.nome}.`;
        }
    }
}

class Retangulo extends FormaGeometrica {
    constructor(public largura: number, public altura: number) {
        super("Retângulo");
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }
}

class Circulo extends FormaGeometrica {
    constructor(public raio: number) {
        super("Círculo");
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }
}

export { FormaGeometrica, Retangulo, Circulo };
