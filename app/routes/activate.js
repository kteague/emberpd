import Ember from 'ember';

export default Ember.Route.extend({
	
	session: Ember.inject.service('session'),
	
	model(params) {
		return this.store.queryRecord('signup', params);
	},
	
	actions: {

		setPassword: function() {
			var id = this.controller.model.get('id');
			var k = this.controller.get('k');
			var password = this.controller.get('password');
			
			$.post('/api/1/set_password', { id: id, k: k, p: password })
			
	    this.get('session').authenticate(
				'authenticator:pd', this.controller.model.get('email'), password
			).catch((reason) => {
	      this.set('errorMessage', reason.error);
	    });
			
			this.transitionTo('app.home')
		}

	}

});
