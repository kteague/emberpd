import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		secondPage: function() {
			$( ".second-page" ).show();
			$( ".first-page" ).hide();
		}
	}
});
