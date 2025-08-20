// interação com o usuário via comando prompt
var nome = prompt("Digite seu nome:")

alert("Seu nome é: " + nome)

//CONDICIONAIS

// SE, SENÃO SE, SENÃO
// if, else if, else

var estaVivo = true

if (estaVivo == true) {
    console.log("Você está vivo")
}
else if (estaVivo == false) {
    console.log("Você está morto");
}
else {
    console.log("Você não é nada viro uma coisa ai")
}

// Escolha / caso
// sitch / case

var corCamisa = "Cinza"

switch (corCamisa) {
    case "Cinza":
        console.log("Você ganhou um voucher")
        break
    case "Vermelho":
        console.log("Voc~e ganhou um body splash")
        break
    case "Amarela":
        console.log("Você ganhou um cupom de desconto")
        break
    default:
        console.log("Cor de camisa inválida")
        break
}    

var nota = prompt("Digite sua nota:")

if (nota >= 6) {
    console.log("Aprovado")
}
else if (nota >= 4 && nota <= 6) {
    console.log("Recuperação")

}
else{
    console.log("Reprovado")
}

