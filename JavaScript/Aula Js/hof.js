const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 700 },
  { nome: "Cabo HDMI", preco: 30 },
];

// 1. Filtra os produtos que custam mais de 100
const produtosCaros = produtos.filter((produto) => produto.preco > 100);
console.log("Produtos caros:", produtosCaros);

// 2. Cria um novo array apenas com os nomes dos produtos filtrados
const nomesProdutosCaros = produtosCaros.map((produto) => produto.nome);
console.log("Nomes dos produtos caros:", nomesProdutosCaros);

// 3. Calcula o preço total dos produtos filtrados
const total = produtosCaros.reduce(
  (acumulador, produto) => acumulador + produto.preco,
  0
);
console.log("Preço total dos produtos caros:", total);

// 4. Verifica se existe algum produto mais barato que 50
const temProdutoBarato = produtos.some((produto) => produto.preco < 50);
console.log("Existe algum produto barato?", temProdutoBarato);

// 5. Garante que todos os produtos filtrados custam mais de 50
const todosAcimaDe50 = produtosCaros.every((produto) => produto.preco > 50);
console.log("Todos os produtos caros custam mais de 50?", todosAcimaDe50);

// 6. Exibe cada produto caro no console
produtosCaros.forEach((produto) =>
  console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}`)
);
