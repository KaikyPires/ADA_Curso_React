// Selecionar elementos HTML
//Retorna o Array

// 1.Pelo nome da tag
const todosH1 = document.getElementsByTagName('h1')
console.log(todosH1)

// 2. Pelo nome da classe
const classParagrafo = document.getElementsByClassName('paragrafo')
console.log(classParagrafo)

// 3. Pegar pelo name
const pegarPeloName = document.getElementsByName('email')
console.log(pegarPeloName)

// 4. Pelo ID
const pegarPeloId = document.getElementById('image')
console.log(pegarPeloId)

// 5. Query Selector
const imagem = document.querySelector('body > img')
console.log(imagem)

// 6. Query Selector ALL
const p = document.querySelector('p')
console.log(p)

console.clear()

// Acessando/alterando conteudo das tags
const primeiroParagrafo = document.querySelector('p.paragrafo')
console.log('textContent: ', primeiroParagrafo.textContent) // Só texto
console.log('innerHtml: ', primeiroParagrafo.innerHTML) //Pega as tags

primeiroParagrafo.textContent = 'Outra coisa'
primeiroParagrafo.innerHTML = 'Outra <strong>coisa<strong/>'

console.clear()

pegarPeloName[0].value = 'Kaiky.com'

// Criando elementos na pagina
const listaUl = document.querySelector('ul#lista')
const novaTagLi = document.createElement('li')// Criando tag
novaTagLi.textContent = '2 texto' // Adcionando texto


listaUl.appendChild(novaTagLi)