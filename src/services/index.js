const users = require('./users/users.service.js');
const host = require('./host/host.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(host);
};
