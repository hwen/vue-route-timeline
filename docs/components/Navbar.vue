<template>
    <nav>
        <br>
        <v-list>
            <v-subheader>
                <h4 class="white--text">Menu</h4>
            </v-subheader>
            <v-list-tile v-for="route in routes" :to="route" :key="route.name">
                <v-list-tile-action>
                    <v-icon fa>{{ route.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ route.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ route.subtitle }}</v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </nav>
</template>

<script>
  export default {
    name: 'navbar',
    computed: {
      routes() {
        const routes = [];
        Object.keys(this.$router.options.routes).forEach((key) => {
          const route = this.$router.options.routes[key];
          if (route.title) {
            routes.push(route);
          }
        });
        return routes;
      },
    },
  };
</script>