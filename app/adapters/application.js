import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://0.0.0.0:6543',
	namespace: 'api/1',
});
