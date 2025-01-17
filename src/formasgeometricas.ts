// Classe abstrata base
abstract class FormaGeometrica {
    constructor(public nome: string) {}
  
    // Método abstrato para calcular a área
    abstract calcularArea(): number;
  
    // Método estático que utiliza o método abstrato
    static compararAreas(forma1: FormaGeometrica, forma2: FormaGeometrica): string {
      const area1 = forma1.calcularArea();
      const area2 = forma2.calcularArea();
  
      if (area1 > area2) {
        return `${forma1.nome} tem uma área maior.`;
      } else if (area1 < area2) {
        return `${forma2.nome} tem uma área maior.`;
      } else {
        return `As áreas de ${forma1.nome} e ${forma2.nome} são iguais.`;
      }
    }
  }
  
  // Subclasse para Retângulo
  class Retangulo extends FormaGeometrica {
    constructor(nome: string, public largura: number, public altura: number) {
      super(nome);
    }
  
    calcularArea(): number {
      return this.largura * this.altura;
    }
  }
  
  // Subclasse para Círculo
  class Circulo extends FormaGeometrica {
    constructor(nome: string, public raio: number) {
      super(nome);
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.raio, 2);
    }
  }
  
  export { FormaGeometrica, Retangulo, Circulo };
  