<template>
  <div id="app">
    {{ message }}
    <button :click="this.setMessage"></button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      message: 1,
    };
  },
  methods: {
    setMessage({ index, code }) {
      this.message += 1;
    },
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style: none;
}
</style>
