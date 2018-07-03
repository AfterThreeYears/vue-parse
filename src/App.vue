<template>
  <div id="app">
    <pre id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      name is {{name}}
      name is {{name}}
      c is {{c}}
      <!-- <main-header
        :node-value="value"
      /> -->
    </pre>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import MainHeader from './Test.vue';
  export default {
    components: {
      MainHeader,
    },
    data() {
      return {
        value: undefined,
        name: 'shell',
        c: 0,
      };
    },
    mounted() {
      throw new Error('666');
      // this.$set(this._data, 'value1', '666');
      this.$watch(function() {
        this.c = this.name + 1;
        return this.name;
      }, function(newVal, oldVal) {
        console.log(`newVal is ${newVal}, oldVal is ${oldVal}`);
      });
      this.name = 111;
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
