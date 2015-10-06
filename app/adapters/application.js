import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	host: 'http://0.0.0.0:80',
	namespace: 'api/1',
	authorizer: 'authorizer:application'
});
