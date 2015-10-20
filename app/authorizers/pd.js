import Ember from 'ember';
import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default BaseAuthorizer.extend({
	authorize(data, block) {
		console.log('what is data? ' + data)
		
		const userToken          = data['token'];
		const userIdentification = data['email'];
		
	    if (!isEmpty(userToken) && !isEmpty(userIdentification)) {
	      const authData = `token="${userToken}", email="${userIdentification}"`;
	      block('Authorization', `Token ${authData}`);
	    }
		
		console.log('authorize: authorize: ' + data + ' : block : ' + block)

	}
});