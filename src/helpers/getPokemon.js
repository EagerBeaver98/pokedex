const axios = require("axios");

const {nameFormat} = require("./names")

const getPokemon = (pokemon, callback) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((poke) => {
      poke.data.name = nameFormat(poke.data.name);
      return poke
    })
    .then(poke => {
      callback(poke.data);
    })
    .catch(err => {
      throw new Error(err);
    });
};

const getPokedexFlavorText = (pokemon, version, callback) => {
  axios.get("https://pokeapi.co/api/v2/pokemon-species/" + pokemon)
  .then((poke) => {
    for (let pokedex of poke.data.flavor_text_entries) {
      if (pokedex.version.name === version && pokedex.language.name === 'en') {
        callback(pokedex);
      }
    }
  })
  .catch((err) => {
    throw new Error(err);
  })
};

const getGameList = (gen, callback) => {
  let results = [];
  axios.get("https://pokeapi.co/api/v2/generation/" + gen)
  .then( async ({ data }) => {
    for (let group of data.version_groups) {
      await axios.get(group.url)
      .then((response) => {
        response.data.versions.map((version) => results.push(version))
      })
      .catch((err) => {
        throw new Error(err);
      })
    }
  })
  .catch((err) => {
    throw new Error(err);
  })
  .finally(() => {
    callback(results);
  })
};

module.exports = { getPokemon, getPokedexFlavorText, getGameList };
