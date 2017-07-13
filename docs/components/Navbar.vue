<template>
    <nav class="navbar">
        <router-link :to="{name: 'hello'}" class="navbar-brand">
            Vue route timeline
        </router-link>

        <ul class="navbar-nav">
            <li class="nav-item" v-for="route in routes">
                <router-link :to="route" class="nav-link">
                    {{ route.title }}
                </router-link>
            </li>
        </ul>
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

<style lang="scss">
    .navbar {
        background: #3498db;
        @media screen and (min-width: 576px) {
            display: flex;
        }
    }

    .navbar-brand {
        display: block;
        padding: 20px;
        background: #2980b9;
        color: #ecf0f1;
    }

    .navbar-nav {
        display: flex;
        padding: 0;
        margin: 0;
    }

    .nav-item {
        display: block;
    }

    .nav-link {
        display: block;
        color: #ecf0f1;
        padding: 20px;
        &:focus,
        &:active,
        &:hover {
            color: pink;
        }
        &.router-link-active {
            border-bottom: 4px solid #2980b9;
        }
    }
</style>