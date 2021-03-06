/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'emberpd',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
	  EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  
  ENV['ember-simple-auth'] = { routeAfterAuthentication: 'app.home' };

  if (environment === 'development') {
	  ENV.LOG_TRANSITIONS = true,
	  ENV.LOG_TRANSITIONS_INTERNAL = true,
	  ENV.contentSecurityPolicy = {
	    'default-src': "'none'",
	    'script-src': "'self' 'unsafe-eval'",
	    'font-src': "'self'",
	    'connect-src': "'self' *",
	    'img-src': "'self'",
	    'style-src': "'unsafe-inline' 'self' *",
	    'media-src': "'self'"
	  }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
