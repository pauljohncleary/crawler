'use strict';

var expectIt = require('chai').expect,
  crawl_controller = require('../lib/crawl_controller.js');

describe('Controller', function(){

  it('should start a crawl when supplied with a url root', function(){
    return crawl_controller.startCrawl('http://httpstat.us/404')
      .then(function(data) {
        expectIt(data).to.exist();
      });
  });
});
