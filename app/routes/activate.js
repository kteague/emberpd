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
			
			//var profile = this.store.createRecord('profile');
			//profile.set('password', this.controller.get('password'));
			//profile.set('id', this.controller.model.id);
			//profile.save().then(function() {
			//	_this.transitionTo('app.home');
			//});
		}

	}

});
