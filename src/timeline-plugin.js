import timelineStore from './store';
import Components from './components';

const timelinePlugin = {};

timelinePlugin.install = function install(Vue, store, router, moduleName = 'timeline') {
  store.registerModule(moduleName, timelineStore);

  Object.keys(Components).forEach((key) => {
    Vue.component(`${key}`, Components[key]);
  });

  const setRoute = (title, subtitle = '') => {
    store.dispatch(`${moduleName}/addTimelineItem`, {
      title,
      subtitle,
      route: router.app.$route,
    });
  };

  Vue.prototype.$routeTimeline = {
    set: setRoute,
  };
};

export default timelinePlugin;
