document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault()
  let email = document.getElementById("email").value
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let resultado = document.getElementById("resultado")
  let menu = document.getElementById("menu")

  if (regex.test(email)) {
    resultado.textContent = "Correo válido"
    resultado.style.color = "green"


    menu.classList.add("pulse")
    setTimeout(() => menu.classList.remove("pulse"), 500)

  } else {
    resultado.textContent = "Correo inválido"
    resultado.style.color = "red"

    menu.classList.add("shake")
    setTimeout(() => menu.classList.remove("shake"), 400)
  }
})

document.getElementById("limpiar").addEventListener("click", function() {
  document.getElementById("email").value = ""
  document.getElementById("resultado").textContent = ""
})
