'use strict';

var expectIt = require('chai').expect,
  database = require('../../lib/shared/database.js');

describe('the database', function(){

  it('should connect to the database successfully', function(){
    return database.testConnection().then(function(data) {
      //should change this to check for actual data
      expectIt(data).to.exist();
    });
  });

});
