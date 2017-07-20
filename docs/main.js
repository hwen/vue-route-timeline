import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import store from './store';

import timeline from './../src';

Vue.use(timeline.plugin, store, router);
Vue.use(Vuetify);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App),
});
