<template>
<div class="main">
  <div class="pokemon">
    <Sprite v-if="$data.gotPokemon" v-bind:img="$data.pokemon.sprites.front_default" />
    <div id="name">
      {{$data.pokemon.name}}
    </div>
    <form class="search-bar">
      <input v-model="text" class="textbox" placeholder="Enter Pokemon name or Pokedex ID">
      <input type="button" value="Search" id="search-button" v-on:click="this.setPokemon($data.text)">
    </form>
    <Description class="description" :entry="$data.pokemon.id" :key="$data.pokemon.id" :game="$data.game" />
  </div>
  <Generation v-if="$data.gotPokemon" :gen="$data.gen"/>
</div>
</template>

<script>
import Sprite from './Sprite.vue';
import { generations, getPokemon } from '../helpers/getPokemon';
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
    return { gotPokemon: false, pokemon: {}, text: '', generations: generations }
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
.main {
  display: flex;
  min-height: 200px;
  height: 70%;
  border-radius: 25px;
  background-color: red;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  width: 90%;
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
  max-width: 40%;
}
</style>
