/**
 * Usage
 *
 * Required params:
 *   * title: The text to be displayed in the popover title
 *   * content: The text to be displayed in the popover body
 * Optional params:
 *   * placement: 'left','right','top','bottom' (default: 'bottom')
 *   * invalid-trigger: The triggering event ('click', 'focus', etc.). Default: none
 *   * invalid-container: The container to use for the tooltip (e.g., 'body'). Default: none
 *
  {{#invalid-popover title='The title' content='The popover body' invalid-container='body' placement='right' invalid-trigger='focus'}}
    <input type='text' />
  {{/invalid-popover}}
 */
import Ember from 'ember';
import BootstrapComponentOptions from '../../mixins/components/bootstrap-component-options';

export default Ember.Component.extend(BootstrapComponentOptions, {
  tagName: 'span',

  setupPopover: Ember.on('didInsertElement', function(){
    this.$(':first-child').popover(this.getBootstrapOptions());
  })
});
