import { concatenarStrings } from "./concatenandostring";

describe("Teste da função concatenarStrings", () => {
    test("Deve concatenar as strings do array com 1 espaço entre elas", () => {
        const input = ["Arrays", "com", "TypeScript"];
        const esperado = "Arrays com TypeScript";
        const resultado = concatenarStrings(input);

        expect(resultado).toBe(esperado);
    });

    test("Deve retornar uma string vazia para um array vazio", () => {
        const input: string[] = [];
        const esperado = "";
        const resultado = concatenarStrings(input);

        expect(resultado).toBe(esperado);
    });

    test("Deve retornar a string original para um array com um único elemento", () => {
        const input = ["TypeScript"];
        const esperado = "TypeScript";
        const resultado = concatenarStrings(input);

        expect(resultado).toBe(esperado);
    });
});