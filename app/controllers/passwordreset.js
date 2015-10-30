import Ember from 'ember';
import { makeAjaxRequest } from 'emberpd/junkdrawer';

const { RSVP, run } = Ember;

export default Ember.Controller.extend({
  
  isSendingReset: false,
  resetEmailSent: false,
  errorCode: '0',
  
  actions: {
    
    sendPasswordReset: function () {
      
      this.set('isSendingReset', true);
      this.set('errorCode', '0');
      var data = {'email': this.get('email')};
      
      new RSVP.Promise((resolve, reject) => {
	    	makeAjaxRequest('/api/1/reset_password', data).then(function(response) {
	        run(null, resolve, response);
	     	}, function(xhr) {
	        run(null, reject, xhr.responseJSON);
	      });
      }).catch((reason) => {
        this.set('errorMessage', reason.message);
        this.set('errorCode', reason.code);
      }).finally(() => {
        this.set('isSendingReset', false);
        if (this.errorCode == '0') {
          this.set('resetEmailSent', true);
        }
      });
      
    }
  },

});

