//Array

const numeros = [9,7,23,68,94]

//Todo elemento
const numerosPositivos =numeros.every((elemento) => elemento > 0)
console.log(numerosPositivos)

const pessoas = [
    {
        id:1,
        nome: 'Kaiky',
        idade: 19,
    },
    {
        id:2,
        nome: 'Joao',
        idade: '21',
    },
    {
        id:3,
        nome: 'Victor',
        idade: '42',
    },
]

const maioresDeIdade = pessoas.every((pessoas) => pessoas.idade > 10)

console.log(maioresDeIdade)

const menorDeIdade = pessoas.some((pessoas) => pessoas.idade <18)
console.log(menorDeIdade)

console.clear()

