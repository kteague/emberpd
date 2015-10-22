import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default BaseAuthorizer.extend({
	session: Ember.inject.service('session'),
	
	authorize(data, block) {
		
		const userToken          = data['token'];
		const userIdentification = data['email'];
		
	    if (!isEmpty(userToken) && !isEmpty(userIdentification)) {
	      block('Authorization', `${userToken}:${userIdentification}`);
	    }
	}

});
