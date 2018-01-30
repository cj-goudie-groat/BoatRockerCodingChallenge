//options variable used for the pokeapi
let options = {
  protocol: 'https',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 5 * 1000 // 5s
}
//Pokedex object that has API methods
let P = new Pokedex.Pokedex(options);
//multiplier object that stores all of the information about each pokemon's
//strengths and weaknesses
let multiplier = new Multiplier();

/**
Battle is called when the user clicks on the submit button of the page, it
connects to the pokeapi, gets 2 pokemon from it, compares the types and stats of
each, then sets the name of the winner to the text area at the bottom of the page
**/
async function battle() {
  multiplier.resetAttackMultiplier();
  multiplier.resetDefenseMultiplier();
  var pokemon1, pokemon2;
  //gets each pokemon from the api
  try {
    pokemon1 = await getPokemon($("#pokemon1").val().toLowerCase());
    pokemon2 = await getPokemon($("#pokemon2").val().toLowerCase());
  }
  catch (e) {
    $("#winner").val("invalid pokemon name");
    return;
  }
  //determines the winner and sets the text area value
  let winner = await compare(pokemon1, pokemon2);
  console.log(winner.name);
  $("#winner").val(winner.name);
}

/**
Calls the pokeapi and returns the pokemon with the name of the passed in string.

name : name of the pokemon being looked up in the api
*/
async function getPokemon(name) {
  var temp;
  await P.getPokemonByName(name).then(function(response) {
      temp = response;
    });
  return temp;
}
