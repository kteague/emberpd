import DS from 'ember-data';

var Profile = DS.Model.extend({
	username: DS.attr('string'),
	orientation: DS.attr('string'),
	gender: DS.attr('string'),
 	firstname: DS.attr('string'),
 	lastlogin:  DS.attr('string')
});

export default Profile;