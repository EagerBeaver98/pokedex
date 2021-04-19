<template>
  <ul class="generation-list">
    <li class="generation-list-item" v-for="generation of this.generations" :class="{'active': (generation.id === this.currentGen)}" :key="generation.id" @click="sendGen(generation.id)" >
      {{genLang(generation.names).name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Generation',
  emits: ["change-gen"],
  props: {
    generations: Array,
    currentGen: Number
  },
  methods: {
    sendGen(gen) {
      this.$emit('change-gen', gen);
    }, 
    genLang(generation) {
      return generation.find(language => language.language.name === "en");
    },
  },

}
</script> 

<style>
.generation-list {
  padding: 0%;
  flex-direction: column-reverse;
  margin: 0%;
  margin-bottom: auto;
}
.active {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
</style>