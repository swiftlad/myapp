var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
var expect = chai.expect;

var message1 = "Hello World!";
var message2 = {message: "Good morning"};

chai.use(chaiHttp);


describe('[Test 01: Without accept headers]', function(done) {
 it('Should send hello world', function(done) {
   chai.request(server)
  .get('/')
  .end(function (err, res) {
     //console.log("Test 1: Running Test without accept headers...");
     expect(err).to.be.null;
     expect(res).to.have.status(200);
     //console.log(res.text);
     expect(res.body).equals(message1);
     done();
  });
 });
}); 

describe('[Test 02: With accept headers]', function(done) {
 it('Should send good monring in JSON', function(done) {
   chai.request(server)
  .get('/')
  .set('Accept', 'application/json')
  .end(function (err, res) {
     //console.log("Test 2: Running Test with accept headers...");
     expect(err).to.be.null;
     expect(res).to.have.status(200);
     //console.log(res.body);
     expect(JSON.stringify(res.body)).equals(JSON.stringify(message2));
     done();
  });
 });
});
  
