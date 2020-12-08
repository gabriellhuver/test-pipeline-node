const assert = require('assert');
const app = require('../../src/app');

describe('\'host\' service', () => {
  it('registered the service', () => {
    const service = app.service('host');

    assert.ok(service, 'Registered the service');
  });
});
