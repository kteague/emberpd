import DS from 'ember-data';

var Signup = DS.Model.extend({
	orientation: DS.attr('string', {defaultValue: 'straight'}),
	gender: DS.attr('string'),
	country: DS.attr('string'),
	city: DS.attr('string'),
	day: DS.attr('string'),
	month: DS.attr('string'),
	year: DS.attr('string'),
	email: DS.attr('string')
});

export default Signup;
