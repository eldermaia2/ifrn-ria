function fatorial(n: number): number {
  if (n < 0) {
      throw new Error('Entrada inválida: números negativos não possuem fatorial.');
  } else if (n === 0) {
      return 1;
  } else {
      return n * fatorial(n - 1);
  }
}

export default fatorial;
