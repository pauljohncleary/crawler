'use strict';

var expect = require('chai').expect,
  processor = require('../lib/processor.js');
  
describe('Processor', function(){
  var testData = {
    'oneLink': {
      remaining: ['http://google.com'],
      current: ['root']
    }
  };

  it('should process an array of remaining links with one link', function(){
    return expect(processor.processLinks(testData.oneLink.remaining, testData.oneLink.current))
      .to.equal(true);
  });

});
