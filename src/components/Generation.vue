<template>
  <ul class="generation-list">
    <li class="generation-list-item" v-for="generation of $data.generations" :key="generation.id" @click="this.sendGen(generation.id)" >
      Generation {{generation.name}}
    </li>
  </ul>
</template>

<script>
import {generations} from "../helpers/getPokemon";
export default {
  name: 'Generation',
  emits: ["change-gen"],
  methods: {
    sendGen(gen) {
      this.$emit('change-gen', gen);
    }
  },
  data() {
    return {generations} //TODO: Change method props pass to event emits
  },
}
</script> 

<style>
.generation-list {
  list-style-type: none;
  margin-right: 20%;
  display: flex;
  padding: 0%;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
}
.generation-list-item {
  margin: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  padding: 6px;
  border-radius: 25px;
}
.generation-list-item:hover {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
</style>