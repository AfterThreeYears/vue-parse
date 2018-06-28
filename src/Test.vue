<template>
  <div @click="handleClick">
    i am {{nodeValue}}
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
      };
    },
    mounted() {
      console.log('this is test', this.a);
    },
    methods: {
      handleClick() {
        console.log(this.a);
        console.log(this._a);
        console.log(this.$a);
      }
    }
  };
</script>