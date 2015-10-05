import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend( UnauthenticatedRouteMixin, {
	actions: {
		startProfile: function() {
  		  var profile = this.store.createRecord('profile', {
  			'username': 'signup',
          	'orientation': 'straight',
  			'gender': 'male'
          });
		  this.transitionTo('signup2');
		}
	}
});
