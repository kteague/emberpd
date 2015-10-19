import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

const { RSVP, isEmpty, run, get } = Ember;

export default BaseAuthenticator.extend({
	
	restore(data) {
		console.log('auth: restore: ' + data)
 	},
	
	authenticate(identification, password) {
		console.log('auth: authenticate: ' + identification + ' : ' + password)
		
	    return new RSVP.Promise((resolve, reject) => {
	    	const data = {};
	    	data['user'] = { password };
	    	data['user']['email'] = identification;
			
	    	this.makeRequest(data).then(function(response) {
	       		run(null, resolve, response);
	     	}, function(xhr) {
	        	run(null, reject, xhr.responseJSON || xhr.responseText);
	      	});
	    });
	},
	
	invalidate(data) {
		return RSVP.resolve();
	},
	
    makeRequest(data) {
		return Ember.$.ajax({
			url: '/api/1/sign_in',
			type: 'POST',
			dataType: 'json',
			data,
			beforeSend(xhr, settings) {
			  xhr.setRequestHeader('Accept', settings.accepts.json);
			}
		});
    }

});
