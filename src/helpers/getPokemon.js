const axios = require("axios");

const getPokemon = async (pokemon, callback) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(poke => {
      callback(poke.data);
    })
    .catch(err => {
      throw new Error(err);
    });
};

module.exports = { getPokemon };
