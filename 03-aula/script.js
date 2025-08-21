console.log("OPA MUNDO")

// Laços de repetição

// PARA = FOR

var repetir = prompt("Quantas vezes deseja repetir?")


for (var i = 0; i <  repetir; i++) {
    console.log("Contagem: " , i)
   
}
console.log("Fim") 

// WHILE = ENQUANTO

var senha = prompt("Digite a senha: (Dica: Número de 4 dígitos)")

var senhaCorreta = "1234"

while (senha != senhaCorreta) {
   
   var senha = prompt("Digite a senha: (Dica: Número de 4 dígitos)")
    alert("Senha incorreta, tente novamente")
    }

console.log("Senha correta")

// FUNÇOES

// Cria a função
function bemVindo() {
    var nome = prompt("Seu Nome Ser Humano:")
    console.log("Olá, " + nome)
}
// Chama a função
bemVindo()

function calcularIdade(idade){
    alert("Sua idade é: " + idade)
}

calcularIdade(19)
calcularIdade(199)




function maior(num1, num2){
   if(num1,1 > num2) {
    console.log("o primeiro numero é maior")
   }     
   else if(num1 < num2){
    console.log("O segundo numero é maior")
   }                 
else{
    console.log("Os valores são iguais")
   }
} 1
var num1 = prompt("Digite o primeiro numero:")
var num2 = prompt("Digite o segundo numero:")
    
  maior(Number(num1), Number(num2))

  // Funções com retorno

  function soma(valor1, valor2){
      let resultado = valor1 + valor2
      
      return resultado
  }

  var valorSomado = soma(7, 6)

  console.log("A soma deu: ", valorSomado) 
 
    