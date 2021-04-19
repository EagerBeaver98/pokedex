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

const {nameFormat} = require('../helpers/names')

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
  methods: {
    gameList() {
      this.$data.genGameList = this.pokemon.generations.find(x => x.id === this.currentGen).games.map((x) => {
      x.name = nameFormat(x.name)
    })
    },
  },
  mounted() {
    this.gameList();
  },
  updated() {
    this.gameList();
  },
}
</script>

<style>
.description-page {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
}
.flavor-text {
  display: inline-flex;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}
.game-list {
  flex-direction: row;
  padding: 0%;
  width: fit-content;
}

</style>