// a. Usando for simples
// Função que calcula o quadrado de cada elemento de um array utilizando um loop for
export function squareArrayWithFor(array: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** 2);
    }
    return result;
}

// b. Usando forEach
// Função que calcula o quadrado de cada elemento de um array utilizando o método forEach
export function squareArrayWithForEach(array: number[]): number[] {
    const result: number[] = [];
    array.forEach((element) => {
        result.push(element ** 2);
    });
    return result;
}