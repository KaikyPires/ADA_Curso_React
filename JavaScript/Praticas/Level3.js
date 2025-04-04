const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Carlos", idade: 30 },
    { nome: "Beatriz", idade: 22 }
  ];

  const encontrarPessoas = (lista,nome) => lista.find(pessoas => pessoas.nome === nome)
  console.log(encontrarPessoas(pessoas,"Carlos"))