import { ordenarElementos } from './ordenacaoelementos';

describe('Ordenação de elementos', () => {
  test('Deve ordenar o array de elementos em ordem alfabética', () => {
    const input = ['carro', 'boneco', 'ave', 'lapis'];
    const esperado = ['ave', 'boneco', 'carro', 'lapis'];
    const resultado = ordenarElementos(input);

    expect(resultado).toEqual(esperado);
  });
});