define(['underscore', 'backbone', '/app/lib/base-app.js'], function (_, Backbone, BaseApp) {

  'use strict';

  describe('Base App', function () {

    it('should be defined', function () {
      expect(BaseApp).to.exist;
    });

    it('should be an instance of a Backbone Marionette Application', function () {
      expect(BaseApp).to.be.an.instanceof(Backbone.Marionette.Application);
    });

    it('should start backbones history engine with pushState enabled', function () {
      var spy = sinon.spy(Backbone.history, 'start');
      BaseApp.start();
      var spyCall = spy.getCall(0);

      expect(spyCall).to.not.equal(null);
      expect(Backbone.history.start.calledOnce).to.equal(true);
      expect(spyCall.args[0].pushState).to.equal(true);
      Backbone.history.start.restore();
    });

    it('should have one region, main', function () {
      expect(BaseApp.main).to.be.an.instanceof(Backbone.Marionette.Region);
      expect(BaseApp.main.el).to.equal('#main');
    });

    it('the default rendering method should work with underscore templates', function () {
      expect( Backbone.Marionette.Renderer.render('<div><%=placeholder%></div>', {placeholder: 'test'}) ).to.equal('<div>test</div>');
    });

  });
});