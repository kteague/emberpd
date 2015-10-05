import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('signup');
	this.route('signup2');
	this.route('login');
	this.route('auth-error');
	this.route('about');
	this.route('app', { path: '/' }, function() {
		this.route('home');
		this.route('edit');
		this.route('browse');
		this.route('profile', { path: '/profile/:profile_id' });		
	});
});

export default Router;
