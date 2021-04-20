<template>
<div class="description-page">
  <ul class="game-list">
    <li class="game-list-item" v-for="game of this.genGameList" :class="{'active': (game.name === this.selectedGame)}" :key="game.id" @click="this.$emit('change-game', game.name)">
      {{this.gameName(game.name)}}
    </li>
  </ul>
    <p class="flavor-text">
      {{this.gameDescription}}
    </p>
</div>
</template>

<script>

const {nameFormat} = require('../helpers/names')

export default {
  name: "Description",
  emits: ['change-game'],
  props: {
    genGameList: Array,
    selectedGame: String,
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
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
.game-list {
  flex-direction: row;
  padding: 0%;
  width: 100%;
}
.game-list-item {
  min-width: 50px;
  width: 100%;
}

</style>