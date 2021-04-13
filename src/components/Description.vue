<template>
    <p class="flavor-text">
      {{flavorText.flavor_text}}
    </p>
</template>

<script>
import { getPokedexFlavorText } from '../helpers/getPokemon';
export default {
  name: "Description",
  props: {
    entry: Number
  },
  data() {
    return {flavorText: Object}
  },
  methods: {
    setFlavorText(text) {
      this.$data.flavorText = text;
    },
    setData() {
      getPokedexFlavorText(this.entry, 'leafgreen', this.setFlavorText)
    }
  },
  mounted() {
    this.setData()
  }
}
</script>

<style>
.flavor-text {
  display: inline-flex;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
}

</style>