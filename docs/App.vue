<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
  import Hello from './views/Hello.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'app',
    components: {
      Navbar,
      Hello,
    },
  };
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap-reboot.scss';

    .container {
        max-width: 1140px;
        padding: 20px;
        margin: 0 auto;
    }
</style>
