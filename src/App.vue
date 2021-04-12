<template>
  <Pokemon v-bind:state="$data.pokemon" v-bind:setPokemon="this.setPokemon"/>
</template>

<script>
import Pokemon from "./components/Pokemon.vue";

let pokemon = {};

export default {
  name: "App",
  components: {
    Pokemon
  },
  data() {
    return pokemon
  },
  methods: {
    setPokemon(pokemon) {
      this.state.pokemon = pokemon;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
