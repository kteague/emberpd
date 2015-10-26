import Ember from 'ember';
import EmberValidations from 'ember-validations';
import config from "../config/environment";

export default Ember.Controller.extend(EmberValidations, {
  isSaving: false,
  hasSubmitted: false,

  validations: {
    'model.email': {
      presence: true,
      email: true
    },
    'model.city': {
      presence: true,
      length: { minimum: 2 }
    }
  },

  actions: {
    validateAndSignup() {
      let hasSubmitted = this.get('hasSubmitted');
      if (!hasSubmitted) {
        this.set('hasSubmitted', true);
      }

      this.validate().then(() => {
        let user = this.get('model');
        this.get('target').send('signup', user, organization);
      }).catch(() => {
        // Silence the validation exception, display it in UI
      });
    }
  }

});

