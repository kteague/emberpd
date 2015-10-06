import Ember from 'ember';

export default Ember.Controller.extend({
	firstPage: true,
	secondPage: false,
	actions: {
		secondPage: function() {
			this.set('firstPage', false);
			this.set('secondPage', true);
		}
	}
});
