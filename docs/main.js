import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import timeline from './../src';

Vue.use(timeline.plugin, store, router);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App),
});
