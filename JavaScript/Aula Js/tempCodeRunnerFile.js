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