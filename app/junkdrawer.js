import Ember from 'ember';

export function makeAjaxRequest(url, data) {
  return	Ember.$.ajax({
  		url: url,
  		type: 'POST',
  		dataType: 'json',
  		data,
  		beforeSend(xhr, settings) {
  		  xhr.setRequestHeader('Accept', settings.accepts.json);
  		}
  });
}
