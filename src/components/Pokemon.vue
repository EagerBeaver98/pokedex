<template>
  <div class="pokemon">
    <Sprite v-if="$data.state.gotPokemon" v-bind:img="$data.pokemon.sprites.front_default" />
    <div id="name">
      {{$data.pokemon.name}}
    </div>
    <form class="search-bar">
      <!-- <input v-model="text" placeholder="Enter Pokemon name or Pokedex ID"> -->
      <button type="button" id="search-button" v-on:click="this.setPokemon('eevee')">Search</button>
    </form>
  </div>
</template>

<script>
import Sprite from './Sprite.vue';
import { getPokemon } from '../helpers/getPokemon';

let pokemon = {};

let state = { gotPokemon: false};

export default {
  name: "Pokemon",
  components: {
    Sprite
  },
    data() {
    return { state, pokemon }
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
      this.$data.state.gotPokemon = true;
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
}
#search-button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
