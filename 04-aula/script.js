       

// Vetor = Array

 var alunos = ["Cristiano", "julião", "Dadinho", "Dexter"]

// Mostra todos os elementos do array 
console.log(alunos)
// Mostra um valor de um a posição especifica do array
console.log(alunos[2])

// Troca um valor
 alunos[3] = "Naruto" 

var aleatorio = ["Roda gigante", "8", "biscoito", "1.4", 3,  false, "Dougras"] 

// loop pra mostrar todos os valores do Array
for(var i = 0; i < 7; i++){
    console.log(aleatorio[i])
}

for(var i = 0; i < aleatorio.lerght; i++){
    console.log(aleatorio[i])
}

var times = ["Real madrid", "Livepool", "Desportiva", "Milan"]

for(var index in times){
    console.log(index) // mostrar o numero da caixinha que descobriu
   
    console.log(times[index]) // mostra o valor que tem dentro da caixinha
}  

var pessoas = ["samuel", "gusta", "flavio", "goku",  "Saitama", "Bóbie",  
"Sérgio"]


console.log(pessoas)

pessoas[7] = "Marquinhos"

for (var index in pessoas){
    console.log(index)

    console.log(pessoas[index])
} 

var pessoas = ["samuel", "gusta", "flavio", "goku",  "Saitama", "Bóbie",  
"Sérgio"]


var pessoas = pessoas.slice().reverse()

console.log("")
for (var nome of pessoas) {
    console.log(nome)
}

// manipulando arrays

var frutas = ["Maça", "Uva", "Pêra"]
// push - adiciona um valor no fim do array
frutas.push("Mamão")
console.log(frutas)

// pop - tira o ultimo valor e retorna ele
var frutaTirada = frutas.pop()
console.log(frutaTirada)

// shift - tira o primeiro valor e retorna ele
var primeiraFruta = frutas.shift()
console.log(primeiraFruta)

// unshift - adiciona um valor ou mais no inicio do array
var novaFruta = "Tomate"
frutas.unshift(novaFruta)
console.log(frutas)
