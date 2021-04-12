<template>
  <div class="pokemon">
    <Sprite img="https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/375px-133Eevee.png"/>
    <div id="name">
      {{this.state}}
    </div>
  </div>
</template>

<script>
import Sprite from './Sprite.vue';
// import { getPokemon } from '../helpers/getPokemon';

export default {
  name: "Pokemon",
  components: {
    Sprite
  },
  props: {
    state: Object,
    setPokemon: Function
  },
  methods: {
    logger(check) {
      console.log(check)
    }
  }
};
</script>

<style>
.pokemon {
  display: flex;
  height: 300px;
  border-radius: 25px;
  background-color: red;
  align-items: center;
  justify-content: space-around;
}
</style>
