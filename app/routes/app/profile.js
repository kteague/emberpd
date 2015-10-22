import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	  session: Ember.inject.service('session'),
  
    model(params) {

      return this.store.findRecord('profile', params.profile_id);
    }
});
