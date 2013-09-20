define(['app'], function (BaseApp) {

  'use strict';

  /**
  * The augmented BaseApp class which drives the Demo App.
  *
  * @class DemoApp
  * @static
  */

  BaseApp.on('initialize:before', function () {
    // initialize your routers // initial views here etc

    //remove this
    console.log('Application Initialized Here');

  });

  return BaseApp;
});