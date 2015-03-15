'use strict';

var expectIt = require('chai').expect,
  saver = require('../lib/util/saver.js');

describe('Saver', function(){

  it('should connect to the database successfully', function(){
    return saver.testConnection().then(function(data) {
      expectIt(data).to.exist();
    });
  });

});
