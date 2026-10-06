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
    this.nome = nome;
    this.tipo = tipo;
    this.nivel = nivel;
    this.hp =hp;
    return this.pokemon
  }


  const meuPokemon = new criarPokemon("a","b", 67, 90);
  console.log(meuPokemon);