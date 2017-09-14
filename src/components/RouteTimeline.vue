<template>
    <div class="timeline">
        <slot v-for="item in items" :title="item.title" :subtitle="item.subtitle" :created="item.created"
              :route="item.route" name="item">
            <router-link :to="item.route" class="timeline-item">
                <h5 class="timeline-title">{{ item.title }}</h5>
                <div class="timeline-subtitle">{{ item.subtitle }}</div>
                <div class="timeline-date">{{ item.created | timelineDate }}</div>
            </router-link>
        </slot>
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

