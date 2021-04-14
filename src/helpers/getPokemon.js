const axios = require("axios");

import {nameFormat} from "./names"

const generations = [{name: "I", id: 1}, {name: "II", id: 2}, {name: "III", id: 3}, {name: "IV", id: 4}, {name: "V", id: 5}, {name: "VI", id: 6}, {name: "VII", id: 7}, {name: "VIII", id: 8}];

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

export { getPokemon, getPokedexFlavorText, generations };
