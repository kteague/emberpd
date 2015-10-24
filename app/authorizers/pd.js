import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default BaseAuthorizer.extend({
	session: Ember.inject.service('session'),
	
	authorize(data, block) {		
		const token = data['token'];
		const identification = data['email'];
		
	    if (!isEmpty(token) && !isEmpty(identification)) {
	      block('Authorization', `${token}:${identification}`);
	    }
	}

});
