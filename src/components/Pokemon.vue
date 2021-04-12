<template>
  <div class="pokemon">
    <Sprite v-if="$data.gotPokemon" v-bind:img="$data.pokemon.sprites.front_default" />
    <div id="name">
      {{$data.pokemon.name}}
    </div>
    <form class="search-bar">
      <input v-model="text" class="textbox" placeholder="Enter Pokemon name or Pokedex ID">
      <input type="button" value="Search" id="search-button" v-on:click="this.setPokemon($data.text)">
    </form>
  </div>
</template>

<script>
import Sprite from './Sprite.vue';
import { getPokemon } from '../helpers/getPokemon';

let pokemon = {};

export default {
  name: "Pokemon",
  components: {
    Sprite
  },
    data() {
    return { gotPokemon: false, pokemon, text: '' }
  },
  methods: {
    logger(check) {
      console.log(check);
    },
    setData(pokemon) {
      this.$data.pokemon = pokemon;
    },
    setPokemon(pokemon) {
      getPokemon(pokemon, this.setData)
      this.$data.gotPokemon = true;
    }
  },
};
</script>

<style>
.pokemon {
  display: flex;
  height: 300px;
  border-radius: 25px;
  background-color: red;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 20px;
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
</style>
