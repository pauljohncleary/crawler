'use strict';

var expect = require('chai').expect,
  pinger = require('../../lib/util/pinger.js'),
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
      expect( _.has(linkObject, 'statusCode')).to.equal(true);
      expect( _.has(linkObject, 'responseTime')).to.equal(true);
    });
  });


});
