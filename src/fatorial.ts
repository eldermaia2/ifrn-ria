function fatorial(n: number): number | string {
    if (n < 0) {
      return 'Entrada inválida';
    } else if (n === 0) {
      return 1;
    } else {
      return n * fatorial(n - 1) as number;
    }
  }
  
  export default fatorial;  