let favicons = require('favicons');
let fs = require('fs');
let source = 'static/logo.png';
let configuration = {
  appName: 'Vue route timeline',
  appDescription: 'Build a timeline clicking throug your application, using vue-router and vuex.',
  developerName: 'disjfa',
  developerURL: 'https://github.com/disjfa/vue-route-timeline',
  background: '#fff',
  theme_color: '#fff',
  path: '/static/icons',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/vue-route-timeline',
  version: '1.0',
  logging: false,
  online: false,
  preferOnline: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: { offset: 25 },
    favicons: true,
    firefox: true,
    windows: true,
    yandex: true,
  },
};
callback = (error, response) => {
  if (error) {
    console.log(error.status);
    console.log(error.name);
    console.log(error.message);
    return;
  }

  response.images.forEach((image) => {
    fs.writeFile(`./static/icons/${image.name}`, image.contents, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log(`${image.name} was saved!`);
    });
  });

  response.files.forEach((image) => {
    fs.writeFile(`./static/icons/${image.name}`, image.contents, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log(`${image.name} was saved!`);
    });
  });

  console.log(response.html.join('\n'));
};

favicons(source, configuration, callback);
