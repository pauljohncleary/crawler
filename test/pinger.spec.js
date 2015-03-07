'use strict';

var expectIt = require('chai').expect,
  pinger = require('../lib/pinger.js'),
  _ = require('lodash');

describe('Pinger', function(){
  var testData = {
    'working': {
      link: 'http://google.com',
      foundOn: '0'
    }
  };

  it('it should return a status code and response time', function(){
    return pinger.ping(testData.working).then(function(linkObject) {
      expectIt( _.has(linkObject, 'statusCode')).to.equal(true);
      expectIt( _.has(linkObject, 'responseTime')).to.equal(true);
    });
  });


});
