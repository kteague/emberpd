import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend( UnauthenticatedRouteMixin, {
	
	model:  function() {
		return this.store.createRecord('signup');
	},
	
    setupController: function(controller, model) {
        controller.set('model', model);
    },
	
	actions: {
		
		secondPage: function() {
			$( ".second-page" ).show();
			$( ".first-page" ).hide();
		},

		signUp: function() {
			var _this = this;
			this.controller.model.save().then(function() {
				_this.transitionTo('welcome');
			});
		}

	}

});
