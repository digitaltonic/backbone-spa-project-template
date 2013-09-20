define(['underscore', 'backbone'], function (_, Backbone) {

  'use strict';

	return Backbone.View.extend({

		initialize: function (options) {
			this._templateVariables = options || {};
		},

		render: function () {
			this.$el.html(_.template(this.template, this._templateVariables));
			return this;
		}

	});
});