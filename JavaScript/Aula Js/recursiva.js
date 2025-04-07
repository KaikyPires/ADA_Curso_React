function fat(num){
    if(num == 1){
        return 1;
    }
    else{
        return num * fat(num -1)
    }
}


console.log(fat(3))

/*function somaArray (numeros){
    let  soma =0;
    for (let num of numeros){
        soma += num;
    }
    return soma;
}*/

console.log(somaArray([1,4,2,3,5]))

function somaArray(numeros) {
    if (numeros.length === 0) {// Caso base: quando o array estiver vazio, retorna 0
        return 0;
    }
    return numeros[0] + somaArray(numeros.slice(1)); // Soma o primeiro elemento com o restante do array
}

console.log(somaArray([1, 2, 3, 4, 5])); // Saída: 15


function conte (numeros){
   return numeros.length
}
function maiorNum(numeros){
    let maior = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior;
}
console.log(maiorNum([1, 2, 3, 4, 5])); 

function pesqBin(numeros, alvo){
    let inicio = 0;
    let fim = numeros.length - 1;
    let tentativas = 0;

    while (inicio <= fim){
        let meio = Math.floor((inicio + fim) / 2);
        tentativas++;
            if(numeros[meio] === alvo){
                console.log('Acertou o numero era:', numeros[meio],'acertou na tentativa' ,tentativas)
                return
            }
            else if(numeros[meio] < alvo){
                inicio = meio + 1;
            }
            else{
                fim = meio - 1
            }
    }
}
const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const alvo = 5;

pesqBin(numeros, alvo)