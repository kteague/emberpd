import Ember from 'ember';

const { RSVP, run } = Ember;

export default Ember.Controller.extend({
  
  isSendingReset: false,
  resetEmailSent: false,
  
  actions: {
        
    sendPasswordReset: function () {
      var _this = this;
      this.set('isSendingReset', true);
      var email = this.get('email');      
    	const data = {};
      data['email'] = email;
      
      this.makeRequest(data).then(function(value) {
        _this.set('resetEmailSent', true);
      }, function(reason) {
        _this.set('errorMessage', reason.message);
        _this.set('errorCode', reason.code);
      });
      
      this.set('isSendingReset', false);

      //catch((reason) => {
      //  this.set('errorMessage', reason.message);
      //  this.set('errorCode', reason.code);
      //}).finally(() => {
      //  this.set('isSendingReset', false);
      //  this.set('resetEmailSent', true);        
      //});

    }
      
  },

  makeRequest(data) {
    return	Ember.$.ajax({
    		url: '/api/1/reset_password',
    		type: 'POST',
    		dataType: 'json',
    		data,
    		beforeSend(xhr, settings) {
    		  xhr.setRequestHeader('Accept', settings.accepts.json);
    		}
    });
  }

});

