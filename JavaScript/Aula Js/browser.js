const prompt = require("readline-sync")

const nota = Number(prompt.question("Qual a sua nota? "));

if(nota >= 6){
    console.log("Voce passou!")
}
else if(nota > 4){
    console.log("Voce esta de recuperacao")
}
else{
    console.log("Voce repetiu")
}
