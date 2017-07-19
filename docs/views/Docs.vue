<template>
    <div class="container">
        <h2>Documentation</h2>
    </div>
</template>

<script>
  export default {
    name: 'docs',
    mounted() {
      this.$routeTimeline.set('Documentation', 'We have read the docs');
    },
  };
</script>

<style scoped>
</style>
