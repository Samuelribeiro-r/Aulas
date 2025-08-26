var aluno = {
    nome : "Mingual",
    anoEscolar: "2º",
    turma: "C",
    notas: [6, 8, 7],
    estudar: function(){
        console.log("Estudando...")

    },
    // metodo com funçao interna
    media: function(n1,n2,n3){
        return ((n1+n2+n3) / 3)
    },
   // método com função externa
   listadeocorrencias: Ocorrencias
}

console.log("O aluno ", aluno.nome, "Está no", aluno.anoEscolar, "Ano Escolar.")
// executa um método do dentro  do objeto
aluno.estudar()

console.log("Média Final: ", aluno.media(aluno.notas[0], aluno.notas[1], alunos.notas[2]))

// cria funçao externa para utilização do objeto
function Ocorrencias(){
     console.log("Xingou a Professora")
     console.log("Jogo comida na cara da diretora")
     console.log("baeu na Professora")
}