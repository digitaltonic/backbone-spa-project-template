define(['base-view'], function (BaseView) {

  describe('BaseView', function () {
    it('should be defined', function () {
      expect(BaseView).to.exist;
    });

    it('should be instantiable', function () {
      var fn = function () {
        new BaseView();
      };

      expect(fn).to.not.throw;
    });

    it('should be a div by default', function () {

      var view = new BaseView();
      expect(view.tagName).to.equal('div');
    });

    it('should be renderable', function () {
      expect(BaseView.prototype).to.respondTo('render');
    });

    describe('Render', function () {

      it('should be chainable', function () {
        var view = new BaseView();
        expect(view.render()).to.equal(view);
      });

      it('should output the template associated with it', function (){
        var V = BaseView.extend({ template: 'Hello <i>W</i>orld!' });
        expect(new V().render().$el.html()).to.equal('Hello <i>W</i>orld!');
      });

      it('should apply the variables into the template', function () {
        var V = BaseView.extend({template: '<%=t%>|<%=y%>'});
        expect(new V({t:1, y: 'hello'}).render().$el.html()).to.equal('1|hello');
      });

    });

  });

});