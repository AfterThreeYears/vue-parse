<template>
  <div>
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
      };
    },
    mounted() {
      console.log('this is test', this);
      console.log(this.$options.render);
    }
  };
</script>