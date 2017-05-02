<template>
  <div id="app">
    {{text}}
    <button @click="changeText"></button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text: 'hello world'
      };
    },
    created() {
      localStorage.setItem('test', 'hello');
      // window.location.href = 'http://codesky.me';
    },
    methods: {
      changeText() {
        this.text = 'test click'
      }
    },
    mounted() {
      // window.location.href = 'http://codesky.me';
    }
  };
</script>
