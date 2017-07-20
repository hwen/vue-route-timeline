import Vue from 'vue';
import Router from 'vue-router';
import Hello from './../views/Hello';
import Instalation from './../views/Instalation';
import Docs from './../views/Docs';

Vue.use(Router);

const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: 'Hello',
    icon: 'home',
    component: Hello,
  },
  {
    path: '/instalation',
    name: 'instalation',
    title: 'Get started',
    icon: 'publish',
    component: Instalation,
  },
  {
    path: '/docs',
    name: 'docs',
    title: 'Documentation',
    icon: 'rowing',
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
