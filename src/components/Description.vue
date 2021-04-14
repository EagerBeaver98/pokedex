<template>
<div class="description-page">
  <ul class="game-list">
    <li class="game-list-item">
    </li>
  </ul>
    <p class="flavor-text">
      {{flavorText.flavor_text}}
    </p>
</div>
</template>

<script>
import { getPokedexFlavorText } from '../helpers/getPokemon';
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
    getGames() {

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