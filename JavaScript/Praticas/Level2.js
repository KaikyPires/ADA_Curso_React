function numeros(lista) {
    return lista;
}

const resultado = numeros([9, 7, 23, 68, 94]);


const numerosAoQuadrado = resultado.map((numero) => numero ** 2);
const numerosPares = resultado.filter((numero) => numero % 2 == 0)
const somaTotal = resultado.reduce((acumulador, numero) => acumulador + numero, 0);


console.log(somaTotal)
console.log(numerosPares)
console.log(numerosAoQuadrado);
