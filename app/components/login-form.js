import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticateWithPd() {
      this.get('session').authenticate(
        'authenticator:pd', this.get('identification'), this.get('password')
      ).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },

  }
});