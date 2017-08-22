<template>
    <v-app>
        <v-navigation-drawer persistent v-model="drawer" dark enable-resize-watcher prominent>
            <navbar></navbar>
        </v-navigation-drawer>
        <v-toolbar class="purple" dark>
            <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Vue route timeline</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon href="https://github.com/disjfa/vue-route-timeline">
                <v-icon fa>github</v-icon>
            </v-btn>
        </v-toolbar>
        <main>
            <v-container>
                <router-view></router-view>
            </v-container>
        </main>
    </v-app>
</template>

<script>
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
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
</style>