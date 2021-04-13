<template>
  <ul class="generation-list">
    <li>
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

</style>