/// comentario de uma linha só

/*
comenta
varias
linhas
*/

// Console
console.log("oi"); // Exibe uma mensagem no console do navegador

//alert(""); // Exibe um alerta na tela do usuário

var nome = "Samuel" 
// Declara uma variável chamada nome e atribui o valor "Samuel"

console.log("O nome é: " + nome); 
// Exibe o valor da variável nome no console
 
var texto = "Exemplo de texto";
// Declara uma variável chamada texto e atribui o valor "Olá, mundo!"
console.log( typeof(texto));

var quebrado = 1.9
// Declara uma variável chamada numero e atribui o valor 10
console.log(typeof(quebrado));

var Vouf = true
// Declara uma variável chamada Vouf e atribui o valor booleano true  
console.log(typeof(Vouf));

var nulo = null
// Declara uma variável chamada nulo e atribui o valor null 
console.log(typeof(nulo));

var indefinido = undefined
// Declara uma variável chamada indefinido e atribui o valor undefined
console.log(typeof(indefinido));

var a = 10
console.log(a)
var b = 3;
console.log(b)

var soma = a + b
console.log("A soma é: " + soma)

var subtracao = a - b
console.log("A subtração é: " + subtracao)

var multiplicacao = a * b
console.log("A multiplicação é: " + multiplicacao)

var divisao = a / b
console.log("A divisão é: " + divisao)

var módulo = a % b
console.log("Módulo: " + módulo)

// Operadores logicos
// e, ou, nao
// &&, ||, ! = not

var verdadeiro = true
var mentira = false

// Comparação Com E
console.log(verdadeiro && mentira)  
// Comparação Com OU
console.log(verdadeiro || mentira)
// Comparação Com Negação
console.log(verdadeiro && !mentira)

// Comparação de Relacionais
// >, <, >=, <=, ==, ===, !=, !==

var a = 7
var b = 15
var c = "7"

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b) 
console.log(a == b) 
console.log(a === b) 
console.log(a != b) 
console.log(a !== b) 

console.log(a == c) // Compara só valor
console.log(a === c) // Compara valor e tipo
console.log(a !== c) // Compara só valor e tipo

// interação com o usuário via comando prompt
var numero = prompt("Digite seu numero:")
var numero2 = prompt("Digite outro numero:")

var resultado = Number(numero) + Number(numero2)

console.log("Resultado é: ", resultado)

alert("O resultado é:"+ resultado)





