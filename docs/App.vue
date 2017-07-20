<template>
    <v-app>
        <v-navigation-drawer persistent v-model="drawer" dark enable-resize-watcher prominent>
            <navbar></navbar>
        </v-navigation-drawer>
        <v-toolbar class="primary" dark>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Vue route timeline</v-toolbar-title>
        </v-toolbar>
        <main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </main>
        <v-footer></v-footer>
    </v-app>
</template>

<script>
  import Hello from './views/Hello';
  import Navbar from './components/Navbar';

  export default {
    name: 'app',
    data() {
      return {
        drawer: true,
      };
    },
    components: {
      Navbar,
      Hello,
    },
  };
</script>

<style lang="stylus">
    @import '../node_modules/vuetify/src/stylus/main';

    code.block {
        display: block;
        padding: 0 10px;
        font-size: 1rem;
        overflow: auto;
    }
</style>