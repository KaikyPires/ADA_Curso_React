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