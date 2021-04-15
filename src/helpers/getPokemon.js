const axios = require("axios");

const {nameFormat} = require("./names")

const makeRequestsFromObject = (versions) => {
  let finalRequests = [];
  let index = 8 - Object.keys(versions).length;
  for (let x = 8; x > index; x--) {
    finalRequests.push(axios.get("https://pokeapi.co/api/v2/generation/" + x))
  }
  return finalRequests;
};

const getGames = async (generation, callback) => {
  const versionGroups = [];
  const games = [];
  for (let version_group of generation.version_groups) {
    versionGroups.push(axios.get(version_group.url))
  }
  await axios.all(versionGroups).then(axios.spread((...groups) => {
    for (let group of groups) {
      for (let game of group.data.versions) {
        games.push(game);
      }
    }
    callback(games)
  }))
  .catch((err) => {
    console.log(err);
  });
};

// const getPokedexFlavorText = (pokemon, version, callback) => {
//   axios.get("https://pokeapi.co/api/v2/pokemon-species/" + pokemon)
//   .then((poke) => {
//     for (let pokedex of poke.data.flavor_text_entries) {
//       if (pokedex.version.name === version && pokedex.language.name === 'en') {
//         callback(pokedex);
//       }
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// };

const getPokemon = (pokemon, callback) => {
  const pokemonData = axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon);
  const pokemonSpeciesData = axios.get("https://pokeapi.co/api/v2/pokemon-species/" + pokemon);
  let combinedResponses = {};
  const fullVersion = [];
  axios.all([pokemonData, pokemonSpeciesData])
    .then(axios.spread( async (...responses) => {
      combinedResponses = {...responses[0].data, species: responses[1].data, name: nameFormat(responses[0].data.name)};
      const versions = makeRequestsFromObject(responses[0].data.sprites.versions)
      await axios.all(versions).then(axios.spread( async (...genResponses) => {
        for (let response of genResponses) {
          fullVersion.push(response.data);
        }
        
        for (let x = 0; x < Object.keys(fullVersion).length; x++) {
          await getGames(fullVersion[x], (games) => {
            fullVersion[x] = {...fullVersion[x], games};
          })
        }
        combinedResponses = {...combinedResponses, generations: fullVersion};
        }))
        .then(() => {
          callback(combinedResponses)
        })
        .catch((err) => {
          console.log(err);
        });
    }))
    .catch((err) => {
      console.log(err);
    });
};

// const getGameList = (gen, callback) => {
//   let results = [];
//   axios.get("https://pokeapi.co/api/v2/generation/" + gen)
//   .then( async ({ data }) => {
//     for (let group of data.version_groups) {
//       await axios.get(group.url)
//       .then((response) => {
//         response.data.versions.map((version) => results.push({...version, name: nameFormat(version.name)}))
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     callback(results);
//   })
// };

// makeRequestsFromArray([1])
// getGameList(1, console.log)
getPokemon(200, console.log)
// getPokemonSpecies(1, console.log)

module.exports = { getPokemon };
