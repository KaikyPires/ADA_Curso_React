const aumentarButton = document.querySelector('#aumentar')
const diminuirButton = document.querySelector('#diminuir')

const contador = document.querySelector('#contador')

const input = document.querySelector('input')
aumentarButton.addEventListener('click', (event) =>{
    const valorAtual = Number(contador.textContent)
    
    contador.textContent = String(valorAtual + 1)

    aumentarButton.classList.add('btn')
    diminuirButton.classList.remove('btn')
} )

diminuirButton.addEventListener('click', ()=> {
    const valorAtual = Number(contador.textContent)
    aumentarButton.classList.remove('btn')
    diminuirButton.classList.add('btn')
    
    if(valorAtual != 0){
        contador.textContent = String(valorAtual -1)
    }
    else{
        contador.style.color = 'red'
        alert('Valor zerado')
    }
})

input.addEventListener('input', () =>{
    console.log(input.value)
})

// Alterando estilo
contador.style.padding = '0 2rem'
contador.style.border = 'solid 2px'


