import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session:        service('session'),
  sessionAccount: service('session-account'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
