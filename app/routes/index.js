import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  
  redirect: function() {
    var session = this.get('session');
    if (session.get('isAuthenticated') == false) {
      this.transitionTo('signup');
    } else {
      this.transitionTo('app.home');
    }
  }
});
