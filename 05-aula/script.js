console.log("Oi")
// // --------------------------------------------------------\\
// // com array

var alunos = ["Pedro", "Thiago", "João"]

var media = [7,8,6]

console.log("O aluno:", alunos[0], "teve media: ", media[2])
// ---------------------------------------------------------\\

//----------------------------------------------------------\\
// com objeto 
// nome <---- chave, Samuel <------ Valor
var estudante = {
    nome  : "Cristiano",
    nota1 : 8,
    nota2 : 9,
    media : 8.5
}

console.log(estudante.nome);
console.log(estudante.nota2);
console.log(estudante.nota1);
console.log(estudante.nome, "=", estudante.media);

// cria 4 propriedades de um objeto
var intervalo = {
 tempototal : "20 min",
 horainicio : "15h30",  
 horafim : "15h50",
 local : "Pátio",
 dormir : true

} 
// relacionando as duas informações 
console.log(intervalo.horainicio, "Até" , intervalo.horafim)
// outra forma de acessar propriedades
console.log("onde:", intervalo["local"])

var garrafa = {}
console.log(garrafa)

garrafa.preco = 250
garrafa.tamanh = 7.5
garrafa.cor = "Transparente"

console.log(garrafa)

garrafa.preco = 240.99
garrafa["validade"] = "1 ano"
console.log(garrafa)

// criar uma nova propriedade

var novapro = "apelido"
garrafa[novapro] = "Seiya"
console.log(garrafa.apelido)

// Criar funções

var animal = {
    // Variaveis = Propiedades
   nome: "Chico",
   especie: "Lagarto",
   raca: "Boss",
   // Função = método
   andar: function(){
    console.log("andando meo")
   },
   latir: function(){
    console.log("AUAUAUAUUA")
   }
}

console.log("O nome é: ", animal.nome)

animal.andar()

animal.latir()

