import Vue from 'vue';

export default {
  timelineItemIsAdded(state, payload) {
    const { items } = state;
    items.push(payload.timeline);
    Vue.set(state, 'items', items);
  },
};
