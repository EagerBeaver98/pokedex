<template>
<div class="main">
  <h1>Pok&eacute;dex</h1>
  <div class="body">
  <div class="pokemon">
    <Sprite v-if="$data.gotPokemon" :img="$data.pokemon.sprites.front_default" />
    <div id="name">
      {{$data.pokemon.name}}
    </div>
    <form @submit.prevent="setPokemon(text)" class="search-bar">
      <input v-model="text" class="textbox" placeholder="Enter Pokemon name or Pokedex ID">
      <input type="submit" value="Search" id="search-button">
    </form>
    <Description class="description" v-if="$data.gotPokemon" :gameDescription="gameDescription()" @change-game="changeGame" :genGameList="this.gameList()" />
  </div>
  <Generation v-if="$data.gotPokemon" :generations="$data.pokemon.generations" :currentGen="$data.currentGen" @change-gen="changeGen"/>
  </div>
</div>
</template>

<script>
import Sprite from './Sprite.vue';
import getPokemon from '../helpers/getPokemon';
import Description from './Description.vue';
import Generation from './Generation.vue';

export default {
  name: "Pokemon",
  components: {
    Sprite,
    Description,
    Generation,
  },
    data() {
    return { gotPokemon: false, pokemon: {}, text: '', currentGen: Number, currentGame: String}
  },
  methods: {
    newGenerationArray() {
      this.$data.pokemon.generations = this.$data.pokemon.generations.filter(x => x.id >= this.$data.currentGen)
    },
    setPokemonData(pokemon) {
      this.$data.pokemon = pokemon;
      this.$data.gotPokemon = true;
      this.$data.currentGen = this.$data.pokemon.generations.find((x) => x.name === this.$data.pokemon.species.generation.name).id
      this.$data.currentGame = this.gameList()[0].name
      this.newGenerationArray();
    },
    setPokemon (pokemon) {
      getPokemon(pokemon, this.setPokemonData)      
    },
    changeGen(gen) {
      this.$data.currentGen = gen;
    },
    changeGame(game) {
      this.$data.currentGame = game;
    },
    gameList() {
      return this.pokemon.generations.find(x => x.id === this.currentGen).games;
    },
    gameDescription() {
      return this.pokemon.species.flavor_text_entries.find(x => x.version.name === this.currentGame).flavor_text
    },
  },
  updated() {
    console.log(this.$data)
  },
};
</script>

<style>
h1 {
  display: flex;
  justify-content: center;
}
.main {
  display: flex;
  min-height: 200px;
  height: 70%;
  border-radius: 25px;
  background-color: red;
  flex-direction: column;
  padding-top: 20px;
  width: 90%;
}
.body {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.search-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.textbox {
  width: 220px;
  border-radius: 25px;
  text-align: center;
}
#search-button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
  text-align: center;
  border-radius: 25px;
  width: 150px;
}
.description {
  width: 100%;
}
ul {
  list-style-type: none;
  display: flex;
  background-color: white;
  border-radius: 25px;
}
li {
  margin: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  padding: 6px;
  border-radius: 25px;
}
li:hover {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
.active {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
</style>
