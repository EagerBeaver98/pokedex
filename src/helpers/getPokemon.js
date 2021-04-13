const axios = require("axios");

const nameFormat = (name) => {
  const newName = name[0].toUpperCase() + name.substring(1);
  return newName;
}

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

const getGameList = (callback) => {
  axios.get("https://pokeapi.co/api/v2/version/")
  .then((games) => {
    callback(data.rows.map((game) => {
      return nameFormat(game.name);
    }))
  })
  .catch((err) => {
    throw new Error(err)
  });
};

getGameList(console.log)

module.exports = { getPokemon, getPokedexFlavorText, getGameList };
