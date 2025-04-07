for (let i = 0; i < 5; i++) {
  console.log(i);
}

const pessoa = ["Kaiky", 20];

console.log(pessoa);
console.log(pessoa[1]);

pessoa[0] = "Joao";

console.log(pessoa[0]);
console.log(pessoa.length);

console.clear();

let numeros = [31, 9, 7, 23, 49];
// recortando array
console.log(numeros.slice(0, 3));
// Adicionando numeros ao final
console.log(numeros.push(2));
// Adicionando numeros ao inico
console.log(numeros.unshift(-1));

console.clear();

// Definição de um objeto
const pessoa = {
  nome: "Kaiky",
  idade: 20,
  profissao: "Desenvolvedor",
  saudacao: function () {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  },
};

console.log(pessoa.saudacao());

// Manipulação de objetos
pessoa.idade = 21;
pessoa.cidade = "São Paulo"; // Adicionando uma nova propriedade
console.log(pessoa);

console.clear();

// Array de objetos
const carros = [
  { marca: "Toyota", modelo: "Corolla", ano: 2020 },
  { marca: "Honda", modelo: "Civic", ano: 2019 },
  { marca: "Ford", modelo: "Focus", ano: 2018 },
];

// Percorrendo o array de objetos
carros.forEach((carro) => {
  console.log(`${carro.marca} - ${carro.modelo} (${carro.ano})`);
});

console.clear();

// Funções com operações matemáticas
const somar = (a, b) => a + b;
const dividir = (a, b) => (b !== 0 ? a / b : "Não é possível dividir por zero");
const quadrado = (num) => num ** 2;

console.log(somar(10, 5));
console.log(dividir(10, 2));
console.log(quadrado(4));

console.clear();

// Função que retorna um objeto
const criarUsuario = (nome, idade) => {
  return {
    nome,
    idade,
    ativo: true,
    apresentar() {
      return `Usuário: ${this.nome}, Idade: ${this.idade}`;
    },
  };
};

const usuario1 = criarUsuario("João", 25);
console.log(usuario1.apresentar());
