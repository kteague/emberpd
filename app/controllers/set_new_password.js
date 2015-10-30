import Ember from 'ember';
import { makeAjaxRequest } from 'emberpd/junkdrawer';

const { RSVP, run } = Ember;

export default Ember.Controller.extend({
	queryParams: ['id', 'k'],
  isSendingReset: false,
	session: Ember.inject.service('session'),
  
	actions: {

		setPassword: function() {
      
      this.set('isSendingReset', true);
      
			var data = {
        'id':this.get('id'), 'k':this.get('k'), 'p':this.get('password'), 'n':'y'
      };
      
      new RSVP.Promise((resolve, reject) => {
	    	makeAjaxRequest('/api/1/set_password', data).then(function(response) {
	        run(null, resolve, response);
	     	}, function(xhr) {
	        run(null, reject, xhr.responseJSON);
	      });
      }).finally(() => {
        this.set('isSendingReset', false);
  	    this.get('session').authenticate(
  				'authenticator:pd', this.get('email'), this.get('password')
  			).catch((reason) => {
  	        this.set('errorMessage', reason.error);
  	    });
        this.transitionToRoute('app.home');
      });    
		}

	}

});
