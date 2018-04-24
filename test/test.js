var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello sanchit', function(done) {
    request(app).get('/').expect('hello sanchit', done);
  });
});
