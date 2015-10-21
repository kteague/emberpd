import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

const { RSVP, run } = Ember;

export default BaseAuthenticator.extend({
	
	restore(data) {
		console.log('auth: restore: ' + data);
	    const { tokenAttributeName, identificationAttributeName } = ('token', 'identification');
	    const tokenAttribute = get(data, tokenAttributeName);
	    const identificationAttribute = get(data, identificationAttributeName);
	    return new RSVP.Promise((resolve, reject) => {
			if (!isEmpty(tokenAttribute) && !isEmpty(identificationAttribute)) {
				resolve(data);
			} else {
				reject();
			}
	    });
 	},
	
	authenticate(identification, password) {
		
	    return new RSVP.Promise((resolve, reject) => {
	    	const data = {};
	    	data['password'] = password;
	    	data['identification'] = identification;
			
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
