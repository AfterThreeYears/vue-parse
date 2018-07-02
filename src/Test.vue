<template>
  <div @click="handleClick">
    {{$root._data}}
  </div>
</template>

<script>
  export default {
    props: {
      'node-value': {
        type: String,
        default: 'test',
        required: true,
      },
    },
    data() {
      return {
        a: 1,
        _a: 2,
        '$a': 3,
        obj: {
          name: 'wbb',
        },
        arr: [
          {
            a: 1
          }
        ],
      };
    },
    mounted() {
      console.log('this is test', this);
    },
    methods: {
      handleClick() {
        console.log(this.a);
        console.log(this._a);
        console.log(this.$a);
        // this.obj.name1 = 1;
        console.log(this.arr);  
      }
    }
  };
</script>