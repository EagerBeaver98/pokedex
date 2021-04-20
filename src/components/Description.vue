<template>
<div class="description-page">
  <ul class="game-list">
    <li class="game-list-item" v-for="game of this.genGameList" :key="game.id">
      {{this.gameName(game.name)}}
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
    genGameList: Array,
    selectedGame: Number,
    gameDescription: String,
  },
  methods: {
    gameName(name) {
      return nameFormat(name);
    }
  },
}
</script>

<style>
.description-page {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
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
.game-list-item {
  min-width: 50px;
}

</style>