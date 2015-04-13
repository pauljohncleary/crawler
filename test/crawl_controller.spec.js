'use strict';

var expect = require('chai').expect,
  crawl_controller = require('../lib/crawl_controller.js');

describe('Controller', function(){

  it('should start a crawl when supplied with a url root', function(){
    return crawl_controller.startCrawl('hgfhg ://httpstat.us/404')
      .then(function(data) {
        expect(data).to.exist();
      });
  });
});
