import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  isLoggingIn: false,
  
  actions: {
    authenticateWithPD() {
      this.set('isLoggingIn', true);
      
      this.get('session').authenticate(
        'authenticator:pd', this.get('identification'), this.get('password')
      ).catch((reason) => {
        this.set('errorMessage', reason.message);
        this.set('errorCode', reason.code);
      }).finally( () => {
        this.set('isLoggingIn', false);
      });
    },

  }
});