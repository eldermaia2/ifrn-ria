import { squareArrayWithFor, squareArrayWithForEach } from "./quadrado";

describe("squareArrayWithFor", () => {
    it("deve retornar o quadrado de cada elemento do array", () => {
        const input = [3, 5, 7, 3, 8, 9, 1];
        const expected = [9, 25, 49, 9, 64, 81, 1];
        expect(squareArrayWithFor(input)).toEqual(expected);
    });
});

describe("squareArrayWithForEach", () => {
    it("deve retornar o quadrado de cada elemento do array", () => {
        const input = [3, 5, 7, 3, 8, 9, 1];
        const expected = [9, 25, 49, 9, 64, 81, 1];
        expect(squareArrayWithForEach(input)).toEqual(expected);
    });
});