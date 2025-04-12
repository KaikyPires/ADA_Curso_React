const aumentarButton = document.querySelector("#aumentar");
const diminuirButton = document.querySelector("#diminuir");

const contador = document.querySelector("#contador");

const input = document.querySelector("input");
aumentarButton.addEventListener("click", (event) => {
  const valorAtual = Number(contador.textContent);

  contador.textContent = String(valorAtual + 1);

  aumentarButton.classList.add("btn");
  diminuirButton.classList.remove("btn");
});

diminuirButton.addEventListener("click", () => {
  const valorAtual = Number(contador.textContent);
  aumentarButton.classList.remove("btn");
  diminuirButton.classList.add("btn");

  if (valorAtual != 0) {
    contador.textContent = String(valorAtual - 1);
  } else {
    contador.style.color = "red";
    alert("Valor zerado");
  }
});

input.addEventListener("input", () => {
  console.log(input.value);
});

// Alterando estilo
contador.style.padding = "0 2rem";
contador.style.border = "solid 2px";

const body = document.querySelector("body");

const mode = document.querySelector("#mode");

const h1 = document.querySelector("h1");

// mode.addEventListener("click", () => {
//   body.classList.toggle("body-darkMode");
//   h1.classList.toggle("h1-darkMode");
// });

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("body-darkMode");
  h1.classList.add("h1-darkMode");
}

mode.addEventListener("click", () => {
  body.classList.toggle("body-darkMode");
  h1.classList.toggle("h1-darkMode");

  const darkModeEnabled = body.classList.contains("body-darkMode");
  localStorage.setItem("darkMode", darkModeEnabled);
});
