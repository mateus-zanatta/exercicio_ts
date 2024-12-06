function multiplicar(a: number, b: number): number {
    return a * b;
}

function saudar(nome: string): string {
    return "Olá " + nome;
}

// Usando a função de multiplicação
const resultado = multiplicar(5, 4);
console.log(`Resultado da multiplicação: ${resultado}`); // Resultado da multiplicação: 20

// Usando a função de saudação
const saudacao = saudar("João");
console.log(saudacao); // Olá João
