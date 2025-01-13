import { extrairPares } from './extracaopares';

describe('Teste para a função extrairPares', () => {
    test('Deve retornar apenas os números pares do array', () => {
        const numeros = [8, 3, 9, 5, 6, 12];
        const resultadoEsperado = [8, 6, 12];
        expect(extrairPares(numeros)).toEqual(resultadoEsperado);
    });

    test('Deve retornar um array vazio se nenhum número for par', () => {
        const numeros = [1, 3, 5, 7];
        expect(extrairPares(numeros)).toEqual([]);
    });

    test('Deve retornar o array original se todos os números forem pares', () => {
        const numeros = [2, 4, 6, 8];
        expect(extrairPares(numeros)).toEqual(numeros);
    });

    test('Deve retornar um array vazio se o array de entrada estiver vazio', () => {
        const numeros: number[] = [];
        expect(extrairPares(numeros)).toEqual([]);
    });
});