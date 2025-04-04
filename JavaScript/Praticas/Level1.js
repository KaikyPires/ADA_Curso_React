function dizerOla(){
    console.log("Olá, mundo!")
}
function executar(funcao){
    funcao()
}
executar(dizerOla)

function operacao(num1,num2, operacao){
return operacao(num1,num2)
}

const soma = (num1,num2) => num1 + num2
const multiplicar = (num1,num2) => num1* num2

console.log(operacao(1,2,soma))