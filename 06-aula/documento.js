// console.log(window.alert("OI CABRA"))

// window.prompt("Me diz um nome")

// // objeto document = código html do site

console.log(document)
console.log(document.head)
console.log(document.body)

// Acessando elemtntos do html
// Por tag. class e id

// Busca elementos pela mesma tag
var titulos = document.getElementsByTagName
("h1")

console.log(titulos)

// Busca elementos pela mesma class
var paragrafos = document.getElementsByClassName("para")

console.log(paragrafos)

// busca elementos pelo ID

var achado = document.getElementById("p3")

console.log(achado)

// Modificando elemento da lista de achados pela tag
titulos[1].style.color = "green"
titulos[2].style.backgroundColor = "pink"

// Modificando elemento da lista de achados pela class
paragrafos[0].style.fontSize = "45px"
paragrafos[0].style.fontWeight= "bold"

// Modificando elemento achado pelo id

achado.innerText = "Tatu"
achado.innerHTML = "<h2>Novo texto</h2>"

// cria função para ser ativada
function cliquei(){
    console.log("ae ganhou")
    console.log("mais não o sufiente pra ser o melhor")
}