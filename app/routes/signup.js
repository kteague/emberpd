import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import Profile from '../models/profile';

export default Ember.Route.extend( UnauthenticatedRouteMixin, {

	actions: {
		
		secondPage: function() {
			$( ".second-page" ).show();
			$( ".first-page" ).hide();
		},
		
		createProfile: function() {
			var profile = this.store.createRecord('profile', {
				username: 'bob',
				orientation: 'straight',
				gender: 'male',
				firstname: 'kevin',
				lastlogin: 'today'
			});
			profile.save().then(function() {
				this.transitionTo('welcome');
			});
		}
		
	}

});
