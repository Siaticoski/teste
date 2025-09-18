const {it, test, expect, describe} = require ('@jest/globals');
const {soma, subtracao, divisao, multiplicacao, quadrado} = require ('./calculadora.js');

describe("Teste da calculado com valor natural", () => {
    it("Deve retornar a soma de dois valores", () =>{
        const esperado = 30;
        const retornado = soma(10, 20);
        expect(retornado).toBe(esperado);
    });

    it("Deve retornar a subtração de dois valores", () =>{
        const esperado = 10;
        const retornado = subtracao(20, 10)
        expect(retornado).toBe(esperado)
    });

    it("Deve retornar a multiplicação de dois valores", () =>{
        const esperado = 15;
        const retornado = multiplicacao(5, 3)
        expect(retornado).toBe(esperado)
    });

    it("Deve retornar a raiz quadrada de dois valores", () =>{
        const esperado = 2;
        const retornado = quadrado(4)
        expect(retornado).toBe(esperado)
    });

    it("Deve retornar a divisão de dois valores", ()=>{
        const esperado = 5;
        const retornado = divisao(15,3);
        expect(retornado).toBe(esperado);
    });
});

describe("Teste da calculadora com valor negativo", () =>{
    it("Deve retornar a subtração negativa de dois valores", () =>{
        const esperado = -10;
        const retornado = subtracao(10, 20)
        expect(retornado).toBe(esperado)
    });

    it("Deve retornar a soma negativa de dois valores", () =>{
        const esperado = -20;
        const retornado = soma(10, -30);
        expect(retornado).toBe(esperado);
    });

    it("Deve retornar a multiplicação negativa de dois valores", () =>{
        const esperado = -72;
        const retornado = multiplicacao(-9, 8)
        expect(retornado).toBe(esperado)
    });

    it("Deve retornar a divisão negativa de dois valores", ()=>{
        const esperado = -5;
        const retornado = divisao(15,-3);
        expect(retornado).toBe(esperado);
    })
});

describe("Exceções", () => {
    it("Não deve retornar multiplicação por zero", ()=> {
        const esperado = 0;
        const retornado = multiplicacao(0, 0);
        expect(retornado).toBe(esperado);
    });

    it("Não deve retornar divisao por zero", ()=> {
        expect(() => divisao(10,0)).toThrow();
    });
})