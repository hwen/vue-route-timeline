import Vue from 'vue';
import Router from 'vue-router';
import Hello from './../views/Hello.vue';
import Docs from './../views/Docs.vue';

Vue.use(Router);

const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: 'Hello',
    component: Hello,
  },
  {
    path: '/docs',
    name: 'docs',
    title: 'Documentation',
    component: Docs,
  },
  {
    path: '*',
    redirect: { name: 'hello' },
  },
];

export default new Router({
  routes,
});
