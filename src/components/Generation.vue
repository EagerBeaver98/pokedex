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
  list-style-type: none;
  display: flex;
  padding: 0%;
  flex-direction: column-reverse;
  background-color: white;
  border-radius: 25px;
  margin: 0%;
  margin-bottom: auto;
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
.active {
  border-style: solid;
  border-width: 3px;
  border-color: black;
}
</style>