//interface: contrato

interface IPessoa{
    //Atributos
    nome: string
    idade:number
    altura: number


    dormir: () => void
}

// Definindo abstração de uma pessoa
class Pessoa implements IPessoa{
    //Atributos
    nome: string
    idade:number
    altura:number
    private cpf: string // encapsulamento, sem o set não consegue acessar ele

    //metodo:ação(funçoes)

    // Construtor
    constructor(nome:string, idade:number, altura:number, cpf:string){
        this.nome = nome
        this.idade = idade
        this.altura = altura 
        this.cpf = cpf 
    }
    
    dormir(){
        console.log('Dormindo...')
    }
    //getter
    get getCpf(){
        return this.cpf
    }
    set setCpf(newCpf: string){
        this.cpf = newCpf
    }
}

const pessoa1 = new Pessoa('Jota', 11, 1.90, '12321')
console.log(pessoa1.getCpf)