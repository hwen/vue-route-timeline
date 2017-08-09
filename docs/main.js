import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';
import App from './App';
import router from './router';
import store from './store';

import timeline from './../src';

Vue.use(VueAnalytics, {
  id: 'UA-83598448-1',
  router,
  autoTracking: {
    pageviewTemplate(route) {
      return {
        page: `/vue-route-timeline${route.path}`,
        title: document.title,
        location: window.location.href,
      };
    },
  },
});
Vue.use(timeline.plugin, store, router);
Vue.use(Vuetify);
Vue.use(Router);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App),
});
