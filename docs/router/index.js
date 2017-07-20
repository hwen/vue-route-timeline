import Vue from 'vue';
import Router from 'vue-router';
import Hello from './../views/Hello';
import Instalation from './../views/Instalation';
import Docs from './../views/Docs';
import Customize from './../views/Customize';

Vue.use(Router);

const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: 'Hello',
    subtitle: 'Vue route timeline',
    icon: 'home',
    component: Hello,
  },
  {
    path: '/instalation',
    name: 'instalation',
    title: 'Get started',
    subtitle: 'Lets do this',
    icon: 'map-signs',
    component: Instalation,
  },
  {
    path: '/customize',
    name: 'customize',
    title: 'Customize',
    subtitle: 'Lets change this',
    icon: 'pencil',
    component: Customize,
  },
  {
    path: '/docs',
    name: 'docs',
    title: 'Documentation',
    subtitle: 'Check it out',
    icon: 'code',
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
