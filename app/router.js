import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('index', { path: '/' });
	this.route('about');
	this.route('edit-profile');
	this.route('browse-profiles');
	this.route('profile', { path: '/profile/:profile_id' });
	
});

export default Router;
