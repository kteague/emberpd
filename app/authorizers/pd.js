import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
	authorize(sessionData, block) {
		console.log('authorize: authorize: ' + sessionData + ' : block : ' + block)
	}
});