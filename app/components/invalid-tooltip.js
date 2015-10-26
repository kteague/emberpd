/**
 * Usage
 *
 * Required params:
 *   * title: The text to be displayed in the tooltip
 * Optional params:
 *   * placement: 'left','right','top','bottom' (default: 'bottom')
 *   * invalid-trigger: The triggering event ('click', 'focus', etc.). Default: none
 *   * invalid-container: The container to use for the tooltip (e.g., 'body'). Default: none
 *
  {{#invalid-tooltip title='The tooltip text'}}
    Hover over this text to see the tooltip.
  {{/invalid-tooltip}}
 */
import Ember from 'ember';
import BootstrapComponentOptions from '../../mixins/components/bootstrap-component-options';

export default Ember.Component.extend(BootstrapComponentOptions, {
  tagName: 'span',

  setupTooltip: Ember.on('didInsertElement', function(){
    var options = this.getBootstrapOptions();
    var tooltip = this.$(':first-child').tooltip(options);

    if(options.trigger === 'immediate') {
      tooltip.tooltip('show');
    }
  })
});
