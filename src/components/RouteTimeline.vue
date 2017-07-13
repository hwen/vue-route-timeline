<template>
    <div class="route-timeline">
        <router-link v-for="item in items" :to="item.route" class="route-timeline-item">
            <h4>{{ item.title }}</h4>
            {{ item.created }}
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'route-timeline',
    computed: {
      items() {
        return this.$store.getters['timeline/getItems'];
      },
    },
  };
</script>