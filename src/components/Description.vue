<template>
  <div>
    <p>
      {{flavorText.flavor_text}}
    </p>
  </div>
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
      getPokedexFlavorText(this.entry, 'blue', this.setFlavorText)
    }
  },
  mounted() {
    this.setData()
  }
}
</script>

<style>

</style>