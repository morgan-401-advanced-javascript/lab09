'use strict';

const { server } = require('../lib/server.js');
const supertester = require('./supertester.js');
const mockRequest = supertester(server);



describe('auth.js requires correct request headers', () => {
  it('should load homepage', async () => {
    await mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
  it('load all the models', async () => {
    await mockRequest
      .get('/models')
      .then(results => {
        expect(results.status).toBe(200);
      })
      .catch(console.error);
  });
});
