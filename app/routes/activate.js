import Ember from 'ember';

export default Ember.Route.extend({
	
	model(params) {
		return this.store.queryRecord('signup', params);
	},
	
	actions: {

		setPassword: function() {
			var _this = this;
			this.controller.model.save().then(function() {
				_this.transitionTo('app.home');
			});
		}

	}

});
