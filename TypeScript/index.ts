// function soma(num1: number, num2: number){
//     return console.log(num1 + num2)
// }
// soma(9,12)

// let numero: number = 20

// const pi = 3.14

// let correta: boolean

// const nomeDoUsuario = prompt('Qual o seu nome?')
// console.log(nomeDoUsuario?.toLowerCase)

// const numeros: number[] = [1,2,3,4]

// const misto:(number | string)[] = ['Kaiky', 27, 1.77]

const idades: number[] = [];
idades.push(10);
idades.push(12);
idades.push(7);
idades.push(19);
const menoresDeIdade = idades.filter((idade) => idade < 18);
// console.log(menoresDeIdade)

//Tupla: qntd determinada de elementos
const pessoaTupla: [string, number] = ["Jubileu", 19];

//Object Types

//interface
interface Person {
  nome: string;
  idade: number;
  altura?: number; //Opcional
}

const pessoa: Person = {
  nome: "Kaiky",
  idade: 20,
  altura: 1.84,
};
const pessoa2: Person = {
  nome: "Joao",
  idade: 9,
};

pessoa2.altura = 1.9; //Atribuição feita ápos

// Type

type desenvolvedor = {
  nome: string;
  especialidade?: string;
  lingugem: string;
};
const desenvolvedor1: desenvolvedor = {
  nome: "Kaiky",
  especialidade: "Full-Stack",
  lingugem: "Java, TypeScript",
};

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: "greater" | "lower"
) {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
      break;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
      break
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio > 0.5) {
        return numero1;
      }
      return numero2;
      break
  }
}
const numeroEscolhido = chooseNumber(10, 20, 'greater');
console.log(numeroEscolhido);

function somar(num1: number, num2:number): number{
    return num1 + num2
}

// Ultility Types: crie novos tipos a partir de tipos existentes

// 1.Partial

type PersonPartial = Partial<Person>

//Tudo vira não obrigatorios
const outraPessoa:PersonPartial ={ 
}

// 2. Required

// Tudo fica obrigatorio
type PersonRequired = Required<Person>

// 3. Pick 

// Escolher algo
type PersonPicked = Pick<Person, 'nome' | 'idade'>

// 4.Omit

// Omiter algo
type PersonOmit = Omit<Person, 'altura'>

// 5. Exclude

type PersonExclude = Exclude<Person, 'altura'>

// 6. Record

type Pessoas = Record<string, Person>

const pessoas:Pessoas ={
    '123.456.789-13':{
        nome:'Fulano',
        idade:20,
    
    }
}