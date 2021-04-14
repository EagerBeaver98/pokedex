const axios = require("axios");

import {nameFormat} from "./names"

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

const getGames = (url, callback) => {
  axios.get(url)
  .then(({data}) => {
    let results = [];
    for (let version of data.version_groups) {
      axios.get(version.url)
      .then(({data}) => {
        
      })
      .catch((err) => {
        throw new Error(err);
      })
    }
  })
  .catch((err) => {
    throw new Error(err);
  })
};

const getGameList = (gen, callback) => {
  axios.get("https://pokeapi.co/api/v2/generation/")
  .then(({ data }) => {
    for (let [key, generation] of data.results.entries()) {
      if (key + 1 === gen) {
        getGames(generation.url, callback);
      }
    }
  })
  .catch((err) => {
    throw new Error(err);
  })
};

getGameList()

export { getPokemon, getPokedexFlavorText };
