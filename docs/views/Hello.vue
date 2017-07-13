<template>
    <div class="container">
        <h1>Vue route timeline</h1>

        <route-timeline></route-timeline>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    mounted() {
      this.$routeTimeline.set('Hellow');
    },
  };
</script>

<style scoped>
</style>
