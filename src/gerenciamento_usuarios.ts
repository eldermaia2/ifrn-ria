// Interface comum
interface Usuario {
    exibirDetalhes(): string;
  }
  
  // Classe 1: Administrador
  class Administrador implements Usuario {
    nome: string;
    nivelAcesso: number;
  
    constructor(nome: string, nivelAcesso: number) {
      this.nome = nome;
      this.nivelAcesso = nivelAcesso;
    }
  
    exibirDetalhes(): string {
      return `Administrador: ${this.nome}, Nível de Acesso: ${this.nivelAcesso}`;
    }
  }
  
  // Classe 2: Cliente
  class Cliente implements Usuario {
    nome: string;
    saldo: number;
  
    constructor(nome: string, saldo: number) {
      this.nome = nome;
      this.saldo = saldo;
    }
  
    exibirDetalhes(): string {
      return `Cliente: ${this.nome}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
  }
  
  export { Usuario, Administrador, Cliente };
  