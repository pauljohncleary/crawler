'use strict';

var expectIt = require('chai').expect,
  saver = require('../lib/util/saver.js');

describe('Saver', function(){

  it('should connect to the database successfully', function(){
    expectIt(saver.testConnection()).to.equal(true);
  });

});
