'use strict';

var expect = require('chai').expect,
  saver = require('../../lib/util/saver.js');

describe('Saver', function(){

  it('should be rewritten to do something valuable', function(){
    return saver.saveLink().then(function(data) {
      expect(data).to.exist();
    });
  });

});
