const fs = require('fs')

fs.readFile('Assincronismo/arquivo.txt', (erro, conteudo) => {
    if(erro){
        console.log('Ocorreu um erro ao tentar ler o arquivo:', erro)
    }
    else{
        console.log(String(conteudo))
    }
})

setTimeout(() => {
    console.log('Isso aqui vai ser executado após 2 seg')
}, 2 *1000)

const promessa = new Promise((resolve,reject) =>{
    fs.readFile('Assincronismo/arquivo.txt', (erro, conteudo) => {
        if(erro){
            reject('Ocorreu um erro ao tentar ler o arquivo:', erro)
        }
        else{
            resolve(String(conteudo))
        }
    })
})
console.log(promessa)