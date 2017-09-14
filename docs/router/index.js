import Router from 'vue-router';
import Hello from './../views/Hello';
import Instalation from './../views/Instalation';
import Docs from './../views/Docs';
import Customize from './../views/Customize';

const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: 'Hello',
    subtitle: 'Vue route timeline',
    icon: 'fa-home',
    component: Hello,
  },
  {
    path: '/installation',
    name: 'installation',
    title: 'Get started',
    subtitle: 'Lets do this',
    icon: 'fa-map-signs',
    component: Instalation,
  },
  {
    path: '/customize',
    name: 'customize',
    title: 'Customize',
    subtitle: 'Lets change this',
    icon: 'fa-pencil',
    component: Customize,
  },
  {
    path: '/docs',
    name: 'docs',
    title: 'Documentation',
    subtitle: 'Check it out',
    icon: 'fa-code',
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
