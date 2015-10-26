/**
 * Usage
 *
 * Required params: none
 * Optional params:
 *   * alert: name of alert. Default: 'warning'
 *   * action: This action will be sent when the alert is dismissed.
 *             This can be necessary to ensure the invalid-alert is cleared and
 *             re-rendered when it is reused to display multiple messages on a page.
 *             See https://github.com/aptible/diesel.aptible.com/issues/223
 *
  {{#invalid-alert action="clearSuccessMessage" alert='success' as |component|}}
    {{invalid-alert-dismiss target=component}} {{! when dismissed, "clearSuccessMessage" action is sent}}
    Here is some success alert text
  {{/invalid-alert}}

 * Use {{#invalid-alert-dismiss}} to add a 'dismiss' button
 */

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['alert'],
  classNameBindings: 'alertClass',
  isVisible: true,
  attributeBindings: ['role'],
  role: 'alert',

  alert: 'warning',
  alertClass: Ember.computed('alert', function() {
    return `alert-${this.get('alert')}`;
  }),

  actions: {
    dismiss: function(){
      this.set('isVisible', false);
      this.sendAction();
    }
  }
});
