const axios = require("axios");

const pokemonName = (name) => {
  const newName = name[0].toUpperCase() + name.substring(1);
  return newName;
}

const getPokemon = async (pokemon, callback) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((poke) => {
      poke.data.name = pokemonName(poke.data.name);
      return poke
    })
    .then(poke => {
      callback(poke.data);
    })
    .catch(err => {
      throw new Error(err);
    });
};

module.exports = { getPokemon };
