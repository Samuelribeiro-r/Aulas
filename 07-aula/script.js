var produto1 = {
    nome : "Coca cola",
    categoria : "bebidas",
    tamanhos : ["200ml", "Lata", "600ml", "2L",], 
    quantidade : 7, 
    descri : function(){
        // O Produto X é da categoria X
    console.log("O Produto", this.nome , "é da categoria", this.categoria)
    },
    verTamanhos : opcoes
}

var produto2 = {
    nome : "Torta",
    categoria : "Comida",
    tamanhos : ["Pequeno", "Medio", "Grande"], 
    quantidade : 25, 
    descri : function(){
        // O Produto X é da categoria X
    console.log("O Produto", this.nome , "é da categoria", this.categoria)
    },
  verTamanhos : opcoes,
};

// Mostrar descrição com uso do this innternamente
// produto2.descri()
//produto1.descri()

function opcoes() {
   let tmh = "arroz";
//   console.log("No inicio: ", tmh);
   for (index in this.tamanhos) {
  //   tmh = tmh + this.tamanhos[index] + ", ";
      tmh += this.tamanhos[index] + ", ";
     //  console.log(tmh);
   }
   // console.log("no Fim:", tmh);
   console.log("As opcoes de tamanho são:" , tmh)
}


//produto1.verTamanhos()
produto2.verTamanhos()
