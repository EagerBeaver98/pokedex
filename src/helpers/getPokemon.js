const axios = require("axios");

const getPokemon = pokemon => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then(poke => {
      return poke.data;
    })
    .catch(err => {
      return err;
    });
};

module.exports = { getPokemon };
