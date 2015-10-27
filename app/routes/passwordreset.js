import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { RSVP, run } = Ember;

export default Ember.Route.extend( UnauthenticatedRouteMixin, {

  isSendingReset: false,
  
  actions: {
    sendPasswordReset: function () {
      var email = this.get('email');
	    return new RSVP.Promise((resolve, reject) => {      
      	this.makeRequest(email).then(function(response) {
         		run(null, resolve, response);
       	}, function(xhr) {
          	run(null, reject, xhr.responseJSON || xhr.responseText);
        });
      });
    }
  },

  makeRequest(email) {
  	return Ember.$.ajax({
  		url: '/api/1/reset_password',
  		type: 'POST',
  		dataType: 'json',
  		email,
  		beforeSend(xhr, settings) {
  		  xhr.setRequestHeader('Accept', settings.accepts.json);
  		}
  	});
  }

});
