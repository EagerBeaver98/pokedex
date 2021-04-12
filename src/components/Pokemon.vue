<template>
  <div class="pokemon">
    <Sprite img="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/375px-133Eevee.png"/>
    <div id="name">
      {{$data.pokemon.name}}
    </div>
    <button id="search-button" v-on:click="this.setPokemon('eevee')">Search</button>
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
    return { pokemon }
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
