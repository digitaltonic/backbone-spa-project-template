define(function() {
  'use strict';

  require.config({

    waitSeconds: 30, // the load timeout, 7 seconds by default.

    paths: {
      'underscore': '../vendor/lodash/lodash',
      'json2': '../vendor/crockford/json2',
      'jquery': '../vendor/jquery/jquery',
      'backbone': '../vendor/backbone/backbone',
      'backbone.marionette': '../vendor/backbone/backbone.marionette',
      'backbone.babysitter': '../vendor/backbone/backbone.babysitter',
      'backbone.wreqr': '../vendor/backbone/backbone.wreqr',
      'app': 'lib/base-app',
      'demo-app': 'lib/demo-app',
      'base-view': 'views/base'
    },
    shim: {

      'backbone': {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },

      'backbone.babysitter': {
        deps: ['backbone']
      },

      'backbone.wreqr': {
        deps: ['backbone']
      },

      'backbone.marionette': {
        deps: [
          'backbone',
          'backbone.babysitter',
          'backbone.wreqr'
        ]
      }
    }

  });
});