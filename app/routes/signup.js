import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import Profile from '../models/profile';

export default Ember.Route.extend( UnauthenticatedRouteMixin, {

	actions: {
		
		secondPage: function() {
			$( ".second-page" ).show();
			$( ".first-page" ).hide();
		},
		
		signUp: function() {
			var signup = this.store.createRecord('signup', {
				orientation: '',
				gender: '',
				country: '',
				city: '',
				day: '',
				month: '',
				year: '',
				email: ''
			});
			var _this = this;
			signup.save().then(function() {
				_this.transitionTo('welcome');
			});
		}
	
	}

});
