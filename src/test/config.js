define(function() {
  'use strict';

  require.config({
    waitSeconds: 1,
    urlArgs: (new Date()).getTime(),
    baseUrl: '../app',
    paths: {
      'squire': '../vendor/squire/squire'
    }
  });

});