define(['backbone.marionette'], function (Marionette) {

  'use strict';

  describe('Marionette.Application', function () {

    it('should be defined', function () {
      expect(Marionette).to.exist;
    });

    it('should run the initialize function on instantiation', function () {
      sinon.spy(Marionette.Application.prototype, 'initialize');
      new Marionette.Application();
      expect(Marionette.Application.prototype.initialize.calledOnce).to.equal(true);
      Marionette.Application.prototype.initialize.restore();
    });

    it('should run the initialize function when instantiated through a subclass', function () {
      var ExtendedClass = Marionette.Application.extend({});
      sinon.spy(ExtendedClass.prototype, 'initialize');

      new ExtendedClass();

      expect(ExtendedClass.prototype.initialize.calledOnce).to.equal(true);
      ExtendedClass.prototype.initialize.restore();

    });

  });

});