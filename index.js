const axios = require('axios')

const pokemon = process.argv[2]

const main = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon)
  .then((poke) => {
    console.log(poke.data)
  })
}

main()