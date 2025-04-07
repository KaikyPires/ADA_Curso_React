function welcome(courseName) {
    return (studentName) => {
        console.log(`Olá, ${studentName}, Seja bem-vindo ao curso de ${courseName}!`);
    };
}

const displayWelcomeToFront = welcome('Front-end em React')
const displayWelcomeToBack = welcome('Front-end em Java')

displayWelcomeToFront('Kaiky')
displayWelcomeToBack('Opa')

console.clear()

// 2 função

const somar = (num1, num2) => num1 + num2;
const multiplicar = (num1, num2) => num1 * num2;
const subtrair = (num1, num2) => num1 -num2;

const calcular = (num1, num2, operacao) => operacao(num1, num2)

const retorno = calcular(1,2, multiplicar)

console.log(retorno)