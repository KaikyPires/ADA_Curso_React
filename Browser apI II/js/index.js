const aumentarButton = document.querySelector('#aumentar')
const diminuirButton = document.querySelector('#diminuir')

const contador = document.querySelector('#contador')

const input = document.querySelector('input')
aumentarButton.addEventListener('click', (event) =>{
    const valorAtual = Number(contador.textContent)

    contador.textContent = String(valorAtual + 1)
} )

diminuirButton.addEventListener('click', ()=> {
    const valorAtual = Number(contador.textContent)
    if(valorAtual != 0){
        contador.textContent = String(valorAtual -1)
    }
    else{
        alert('Valor zerado')
    }
    
})

input.addEventListener('input', () =>{
    console.log(input.value)
})