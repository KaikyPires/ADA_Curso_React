function operacao(num1,num2, operacao){
return operacao(num1,num2)
}

const soma = (num1,num2) => num1 + num2

console.log(operacao(1,2,soma))