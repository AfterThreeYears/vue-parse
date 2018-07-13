<template>
  <div id="app">
    <pre>
      {{computedName}}
			<!-- <my-test :arr="arr"></my-test> -->
		</pre>
    <!-- <router-view/> -->
    <button @click="handleAttr">add obj attr</button>
  </div>
</template>
<script>
import MainHeader from './Test.vue';
  export default {
    components: {
      'my-test': MainHeader,
    },
    data() {
      return {
        value: undefined,
        name: 'shell',
        c: 0,
        obj: {
          a: 1,
        },
        arr: [ "Hey", "you", "there" ]
      };
    },
    watch: {
      obj: {
        handler: function(newVal, oldVal) {
          console.log(`newVal is ${newVal}, oldVal is ${oldVal}`);
        },
        deep: 1,
      }
    },
    methods: {
      handleAttr() {
        this.obj.a = 666;
        console.log(this.obj);
      },
    },
    computed: {
      computedName: {
        get: function() {
          return this.name + '66';
        },
      }
    },
    mounted() {
      this.name = 1;
      this.$nextTick(function nextTick1() {
        this.name = 2;
        this.$nextTick(function nextTick2() {
          console.log('第二个netxticke');
        })
      });
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
