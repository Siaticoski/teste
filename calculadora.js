const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const divisao = (dividendo, divisor) => {
    if (divisor == 0) {
        throw new Error ("Divisor Inválido")
    }
    return dividendo / divisor
}
const multiplicacao = (m1, m2) =>{
    return m1 * m2
}
const quadrado = (r) =>{
    if (r <= 0) {
        throw new Error ("Raiz Inválida")
    }
    if (r == null || r == undefined) {
        throw new Error("Raiz Vazia");
    }
    if (typeof(r) == "string") {
        throw new Error("è palavra man numa função de raiz cai fora");
    }
    raiz = Math.sqrt(r)
    return raiz
}

module.exports = {
    soma,
    divisao,
    subtracao,
    multiplicacao,
    quadrado
}