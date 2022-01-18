'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      webpack: {
        // needed to add this to get around build errors while
        // processing @arcgis/core code included in @esri/hub-components
        // I suspect this is not a robust solution
        node: {
          fs: 'empty',
          path: true,
        },
      },
      // this is needed for ember-esri-loader
      // see: https://github.com/Esri/ember-esri-loader#using-with-ember-auto-import
      exclude: ['esri-loader'],
    },
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
