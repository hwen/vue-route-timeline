# Vue route timeline
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Build a timeline clicking throug your application, using vue-router and vuex.

For detailed explanation on how things work, checkout the [docs](https://disjfa.github.io/vue-route-timeline/#/hello).

## Instalation

``` bash
# install dependencies
npm install vue-route-timeline
```

## Getting started

```javascript
import Vue from 'vue'; // Load vue
import App from './App'; // Load your app
import router from './router'; // Add your router
import store from './store'; // Build your vuex store
import timeline from 'vue-route-timeline'; // Import timeline

Vue.use(timeline.plugin, store, router); // Connect timeline to vue, store and router

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
```

## Usage

Add an item whenever you like, it will store the current route:

```javascript
this.$routeTimeline.set('Package name', this.item.title);
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/632778?v=4" width="100px;"/><br /><sub>disjfa</sub>](http://www.disjfa.nl)<br />[💬](#question-disjfa "Answering Questions") [💻](https://github.com/disjfa/vue-route-timeline/commits?author=disjfa "Code") [🎨](#design-disjfa "Design") [📖](https://github.com/disjfa/vue-route-timeline/commits?author=disjfa "Documentation") [💡](#example-disjfa "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!