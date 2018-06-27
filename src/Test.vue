<template>
  <div>
    i am {{nodeValue}}
  </div>
</template>

<script>
  export default {
    el: '#app',
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

    }
  };
</script>