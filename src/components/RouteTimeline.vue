<template>
    <div class="route-timeline">
        <slot v-for="item in items" :title="item.title" :subtitle="item.subtitle" :created="item.created" :route="item.route" name="item">
            <router-link :to="item.route" class="route-timeline-item">
                <h4>{{ item.title }}</h4>
                <h5>{{ item.subtitle }}</h5>
                {{ item.created }}
            </router-link>
        </slot>
    </div>
</template>

<script>
  export default {
    name: 'route-timeline',
    computed: {
      items () {
        return this.$store.getters['timeline/getItems']
      },
    },
  }
</script>