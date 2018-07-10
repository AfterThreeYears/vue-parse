<template>
  <div style='min-height:100px;margin-bottom:20px;background-color:#eee;'>
      <div v-for="(item, index) in arr1" :key="index">
        {{item}}
      </div>
      <button @click="append">Try this</button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        arr1: [],
      };
    },
    props: {
      arr: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      append: function(){
        this.arr1.push( "Opps." );
      }
    },
    computed: {
      empty: function(){
        return this.arr1.length === 0;
      }
    },
    mounted() {
      this.arr1 = this.arr;
    }
  };
</script>