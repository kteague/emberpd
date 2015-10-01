import DS from 'ember-data';

var Profile = DS.Model.extend({
  firstname: DS.attr('string'),
  lastlogin:  DS.attr('string')
});

export default Profile;