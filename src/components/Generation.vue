<template>
  <ul class="generation-list">
    <li v-for="generation of $data.generations" :key="generation.id"  >
      Generation {{generation.name}}
    </li>
  </ul>
</template>

<script>
import {generations} from "../helpers/getPokemon";
export default {
  name: 'Generation',
  props: {
    gen: String
  },
  data() {
    return {generations}
  },
}
</script>

<style>
ul {
  list-style-type: none;
  margin-right: 20%;
  display: flex;
  padding: 0%;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
}
li {
  margin: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent;
  padding: 6px;
  border-radius: 25px;
}
li:hover {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
</style>