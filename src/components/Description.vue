<template>
<div class="description-page">
  <ul class="">
    <li>
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
    game: String
  },
  data() {
    return {flavorText: Object}
  },
  methods: {
    setFlavorText(text) {
      this.$data.flavorText = text;
    },
    setData() {
      getPokedexFlavorText(this.pokemon.id, 'leafgreen', this.setFlavorText)
    }
  },
  mounted() {
    this.setData()
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