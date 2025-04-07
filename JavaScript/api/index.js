// Fetch API

// then / catch
// fetch("https://viacep.com.br/ws/36494410/json/")
//   .then((resposta) => {
//     resposta.json().then((dados) => console.log(dados))
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });
 
  async function obterDadosCep(){
    try{
        const resposta =  await fetch("https://viacep.com.br/ws/36494410/json/")
    const dados = await resposta.json()

    console.log(dados)
    }catch(erro){
        console.log(erro)
    }
    finally{
        console.log("Terminou a requisição")
    }
  }
  obterDadosCep()