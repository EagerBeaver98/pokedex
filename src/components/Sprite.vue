<template>
  <div>
    <img id="sprite" alt="Pokemon Sprite" v-bind:src="img">
  </div>
</template>

<script>
export default {
  name: "Sprite",
  props: {
    img: String
  }
}
</script>

<style>
#sprite {
  background-color: white;
  border-radius: 25px;
  height: 200px;
}
</style>