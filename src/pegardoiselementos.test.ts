import { pegarDoisElementos } from './pegardoiselementos';

describe('Teste da função pegarDoisElementos', () => {
    it('Deve retornar os dois primeiros elementos do array [2,4,6,2,8,9,5]', () => {
        const entrada = [2, 4, 6, 2, 8, 9, 5];
        const esperado = [2, 4];
        const resultado = pegarDoisElementos(entrada);
        expect(resultado).toEqual(esperado);
    });

    it('Deve retornar um array vazio para uma entrada vazia', () => {
        const entrada: number[] = [];
        const esperado: number[] = [];
        const resultado = pegarDoisElementos(entrada);
        expect(resultado).toEqual(esperado);
    });

    it('Deve retornar o único elemento do array se o tamanho for 1', () => {
        const entrada = [5];
        const esperado = [5];
        const resultado = pegarDoisElementos(entrada);
        expect(resultado).toEqual(esperado);
    });
});