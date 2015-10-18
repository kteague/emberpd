import Ember from 'ember';

export default Ember.Route.extend({
	
	model(params) {
		return this.store.queryRecord('signup', params);
	},
	
	actions: {

		setPassword: function() {
			var id = this.controller.model.get('id');
			var k = this.controller.get('k');
			var password = this.controller.get('password');
			
			$.post('/api/1/set_password', { id: id, k: k, p: password }).then(
				this.transitionTo('app.home')
			);

		}

	}

});
