require(['tests', '../vendor/mocha/mocha.js', '../vendor/sinon/sinon.js', '../vendor/chai/chai.js', '../vendor/chai/chai-sinon.js', '/testem.js', '../app/config', 'config'] , function (tests, _noop, sinon, chai, chaiSinon) {
  'use strict';

  mocha.setup('bdd');         // Globalizes the mocha syntax (describe, it etc)
  mocha.globals(['jQuery']);  // ignores jQuery in the global check

  chai.use(chaiSinon);        // make sinon assertions more Chai like

  require(['underscore', 'backbone.marionette'].concat(tests), function (_, Marionette) {

    // These should possibly be pre-compiled at a later date, but I consider that an optimisation for a later date.
    Marionette.Renderer.render = function (template, data) {
      return _.template(template, data);
    };

    (window.mochaPhantomJS || mocha).run(); //run test suite either in node mocha runner, or browser
  });

  //must be a better way
  expect = chai.expect;

})(expect);