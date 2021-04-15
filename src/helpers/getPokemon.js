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

const getGames = (url, callback) => {
  axios.get(url)
  .then(({data}) => {
    for (let version of data.versions) {
      callback(version);
    }
  })
  .catch((err) => {
    console.log(err);
  })
  // .finally(() => {
  //   callback(results);
  // })
}

const getGameList = (gen, callback) => {
  let gameList = [];
  axios.get("https://pokeapi.co/api/v2/generation/" + gen)
  .then(({ data }) => {
    for (let group of data.version_groups) {
      getGames(group.url, (games) => {
        gameList.push(games);
      });
    }
  })
  .catch((err) => {
    throw new Error(err);
  })
  .finally(() => {
    callback(gameList);
  })
};

getGameList(1, console.log)
// getGames('https://pokeapi.co/api/v2/version-group/1', console.log)

// export { getPokemon, getPokedexFlavorText };
