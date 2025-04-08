"use strict";
//interface: contrato
// Definindo abstração de uma pessoa
class Pessoa {
    //metodo:ação(funçoes)
    // Construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.cpf = cpf;
    }
    dormir() {
        console.log('Dormindo...');
    }
    //getter
    get getCpf() {
        return this.cpf;
    }
    set setCpf(newCpf) {
        this.cpf = newCpf;
    }
}
const pessoa1 = new Pessoa('Jota', 11, 1.90, '12321');
console.log(pessoa1.getCpf);
