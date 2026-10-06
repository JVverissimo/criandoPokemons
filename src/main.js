// Escreva seu código aqui

/* Descomentar a linha abaixo antes de submeter e exportar a função que deve
ser chamada:

Ex: 
  function x() {
    console.log()
  }

  module.exports = x
*/
//module.exports = sua funcao aqui;


  function criarPokemon( nome, tipo, nivel, hp){
    
    return { 
      nome : nome,
      tipo : tipo,
      nivel : nivel,
      hp : hp,
    }
    
  }


  const meuPokemon = criarPokemon("a","b", 67, 90);
  console.log(meuPokemon);