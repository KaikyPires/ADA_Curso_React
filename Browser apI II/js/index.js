const aumentarButton = document.querySelector('#aumentar')
const diminuirButton = document.querySelector('#diminuir')

const contador = document.querySelector('#contador')

aumentarButton.addEventListener('click', (event) =>{
    const valorAtual = Number(contador.textContent)

    contador.textContent = String(valorAtual + 1)
} )

diminuirButton.addEventListener('click', ()=> {
    const valorAtual = Number(contador.textContent)

    contador.textContent = String(valorAtual -1)
})