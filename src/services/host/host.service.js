// Initializes the `host` service on path `/host`
const { Host } = require('./host.class');
const hooks = require('./host.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/host', new Host(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('host');

  service.hooks(hooks);
};
