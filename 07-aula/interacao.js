function quemMeChamou(individuo){
    console.log(individuo)
    console.log("Class:", individuo.class)
    console.log("id:", individuo.id)
    console.log("Name:", individuo.name)
    console.log("Valor:", individuo.value)

}

function trocaTexto(elementoQuemChamou){
    //console.log(elementoQuemChamou)
    let textoAntigo = document.getElementById
    ("textoPraTrocar")

    textoAntigo.innerHTML = elementoQuemChamou.value

}

function troca(elementoQuemChamou){
    let antigo = document.getElementById("textoOutro")
    antigo.innerHTML = elementoQuemChamou.value
}

function corVermelho(elemento){
    elemento.style.color = "red"
    elemento.style.fontSize = "60px"

}

function corAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "20px"
}