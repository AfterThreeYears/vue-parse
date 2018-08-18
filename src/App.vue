<template>
  <div id="app">
    <!-- , 1307, 130703 -->
    {{ codes }}
    <picker :tree="china" :codes="codes" @setCode="setCode" />
  </div>
</template>
<script>
import Picker from './Picker.vue';
import chinaMap from './chinaMap.json';
import china from './china.json';

export default {
  components: {
    Picker,
  },
  data() {
    return {
      info: {
        name: 'abc',
        age: 20,
      },
      str: 'shell',
      china,
      codes: [13],
    };
  },
  methods: {
    setCode({ index, code }) {
      console.log(index, code);
      this.codes = this.codes.slice(0, index);
      this.$set(this.codes, index, code);
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
