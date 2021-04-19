<template>
<div class="description-page">
  <ul class="game-list">
    <li class="game-list-item" v-for="game of $data.genGameList" :key="game.name">
      {{game.name}}
    </li>
  </ul>
    <p class="flavor-text">
      FlavorText
    </p>
</div>
</template>

<script>
export default {
  name: "Description",
  props: {
    pokemon: Object,
    currentGen: Number,
  },
  data() {
    return {
      genGameList: [],
      selectedGame: Number,
    }
  },
  mounted() {
    this.$data.genGameList = this.pokemon.generations.find(x => x.id === this.currentGen).games
  },
  updated() {
    this.$data.genGameList = this.pokemon.generations.find(x => x.id === this.currentGen).games
  },
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