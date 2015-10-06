import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		
		secondPage: function() {
			$( ".second-page" ).show();
			$( ".first-page" ).hide();
		},
		
		createProfile: function() {
			var profile = this.store.createRecord('profile', '2');
			profile.save().then(function() {
				route.transitionTo('welcome', profile);
			});
		}
		
	}
});
