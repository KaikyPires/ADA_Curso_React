"use strict";
// function boasVindas(nome: string):void {
//  console.log('Boas vindas', nome.toUpperCase())
// }
// boasVindas('Kaiky')
const resgistroDesenvolvedores = [
    {
        nome: 'Kaiky',
        idade: 29
    },
    {
        nome: 'Neymar',
        especialidade: 'Full-Stack',
        idade: 32
    },
    {
        nome: 'Gabigol',
        especialidade: 'Front-end',
        idade: 12
    }
];
const desenvolvedorFiltro = resgistroDesenvolvedores.filter(desenvolvedor => desenvolvedor.especialidade != null);
console.log(desenvolvedorFiltro);
const desenvolvedorSoma = resgistroDesenvolvedores.reduce((soma, dev) => soma + dev.idade, 0);
const desenvolvedorMedia = desenvolvedorSoma / resgistroDesenvolvedores.length;
console.log(desenvolvedorMedia);
const maioresDeIdade = resgistroDesenvolvedores.every(dev => dev.idade > 18);
console.log(maioresDeIdade);
function buscarPorNome(nome) {
    const resultado = resgistroDesenvolvedores.find(dev => dev.nome.toLowerCase() === nome.toLowerCase());
    if (resultado) {
        console.log(resultado);
    }
    else {
        console.log(`Desenvolv+edor com nome "${nome}" não encontrado.`);
    }
}
buscarPorNome('Kasdasd');
