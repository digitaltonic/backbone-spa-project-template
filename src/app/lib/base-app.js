define(['underscore', 'backbone', 'backbone.marionette'], function(_, Backbone, Marionette) {

  'use strict';

  /**
  * The base class for the Faq App
  *
  * @class BaseApp
  * @extends Marionette.Application
  * @static
  */

  var App = Marionette.Application.extend({

    initialize: function () {

      this.addRegions({
        main: '#main'
      });

      this.on('initialize:after', function(){
        if (Backbone.history){
          Backbone.history.start({pushState: true});
        }
      });

      // These should possibly be pre-compiled, but I consider that an optimisation for a later date.
      Marionette.Renderer.render = function (template, data) {
        return _.template(template, data);
      };

    }
  });

  return new App();

});