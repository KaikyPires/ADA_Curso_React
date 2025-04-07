// Map: cria um novo array igual ao original podendo efetuar aleraçoes

const numeros = [9, 7, 23, 68, 94];
const newArray = numeros.map((elemento) => {
  return elemento;
});

console.log(newArray);

// Exemplo
const valoresAoQuadrado = numeros.map((elemento) => elemento ** 2);
console.log(valoresAoQuadrado);

// Exemplo 2
const carrinho = [
  {
    produto: "Feijão",
    preço: 9.9,
    quantidade: 3,
  },
  {
    produto: "Arroz",
    preço: 8.5,
    quantidade: 2,
  },
];

const carrinhoTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preço * itemDoCarrinho.quantidade
  }
});

console.log(carrinhoTotal);

const pessoa = {
  nome: "Jonas",
  idade: 21,
  altura: 1.77,
};
const pessoaComPeso = {
  ...pessoa,
  peso: 90,
  
};


console.log(pessoaComPeso);