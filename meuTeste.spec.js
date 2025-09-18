const {it, test, expect, describe} = require ('@jest/globals');

describe("Meus primeiros testes- jest", () => {

    test("Deve retornar a soma de 1 + 1 igual a 2", () => {
        expect(1+1).toBe(2);
    });

    it("Deve retornar a igualdade de um objeto com toEqual", () => {
        const obj1={atributo1:1, atributo:2}
        expect(obj1).toEqual({atributo1:1, atributo:2});
        expect(obj1).toHaveProperty('atributo1');
        expect(obj1).not.toHaveProperty("nome");
        expect(obj1).toHaveProperty('atributo',2);
        expect(obj1.atributo).toBe(2);
    });

    it("Deve retornar se a string existe na palavra teste com o toMatch", () =>{
        expect('teste').toMatch(/e/);
    });
    it("Deve testar numeros", () =>{
        const numero= 10;
        expect(numero).toBeLessThan(11);
        expect(numero).toBeLessThanOrEqual(10);
        expect(numero).toBeCloseTo(10.0001);
        expect(numero).toBeCloseTo(9.9996);
        expect(numero).not.toBeNull();
        expect(numero).toHaveProperty('toString');
        expect(numero).toBeGreaterThan(9);
        expect(numero).toBeGreaterThanOrEqual(10);
        expect(numero).toBeTruthy();
        expect(numero).not.toBeFalsy();
    })

});
