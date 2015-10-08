import DS from 'ember-data';

var Profile = DS.Model.extend({
	orientation: DS.attr('string'),
	gender: DS.attr('string'),
	country: DS.attr('string'),
	city: DS.attr('string'),
	birthdate: DS.attr('string'),
	email: DS.attr('string'),
	password: DS.attr('string'),
	name: DS.attr('string'),
	about_me: DS.attr('string'),
	interests: DS.attr('string'),
	looking_for: DS.attr('string'),
});

export default Profile;