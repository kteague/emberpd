/** Usage
 * Required parameters: none
 * Optional parameters: none
 *
 * Must be included within a invalid-alert like so:

  {{#invalid-alert as |component|}}
     Here is some alert information
     {{#invalid-alert-dismiss target=component}}
       Click here to dismiss the alert.
     {{/invalid-alert}}
  {{/invalid-alert}}

  * If used in inline style, this will insert a pulled-right "X" (this is the bootstrap default)

   {{#invalid-alert as |component|}}
     {{invalid-alert-dismiss target=component}} {{! inline style}}
   {{/invalid-alert}}
 */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  action: 'dismiss',
  classNames: ['invalid-alert-dismiss'],

  click: function(e){
    e.preventDefault();

    Ember.assert('invalid-alert-dismiss must have a target property set',
                 this.get('target'));

    this.triggerAction({
      action: 'dismiss',
      target: this.get('target')
    });
  }
});
