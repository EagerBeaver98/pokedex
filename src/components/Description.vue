<template>
<div class="description-page">
  <ul class="game-list">
    <li class="game-list-item" v-for="game of $data.games" :key="game.id">
      {{game.name}}
    </li>
  </ul>
    <p class="flavor-text">
      {{flavorText.flavor_text}}
    </p>
</div>
</template>

<script>
import { getPokedexFlavorText, getGameList } from '../helpers/getPokemon';
export default {
  name: "Description",
  props: {
    pokemon: Object,
    genID: Number
  },
  data() {
    return {flavorText: Object, games: Array}
  },
  methods: {
    setFlavorText(text) {
      this.$data.flavorText = text;
    },
    fetchFlavorText() {
      getPokedexFlavorText(this.pokemon.id, this.$data.game, this.setFlavorText)
    },
    setGames(games) {
      this.$data.games = games
    },
    getGames() {
      getGameList(this.genID, this.setGames)
    }
  },
  mounted() {
    this.fetchFlavorText()
  }
}
</script>

<style>
.description-page {
  display: inline-flex;
  flex-direction: column;
}
.flavor-text {
  display: inline-flex;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
}

</style>