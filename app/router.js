import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('signup');
    this.route('passwordreset');
    this.route('set_new_password');
    this.route('welcome');
    this.route('login');
    this.route('about');
    this.route('activate');
    this.route('app', { resetNamespace: true }, function() {
        this.route('home');
        this.route('edit');
        this.route('browse');
        this.route('profile', { path: '/profile/:profile_id' });		
    });
});

export default Router;
