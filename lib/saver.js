'use strict';

var mongoose = require('mongoose'),
  Crawl = mongoose.model('Crawl');

exports.saveLink = function(linkObject) {
  //need to work out how this will work

  //we want to save to the db the link details under the crawl ID, where does that come from?

  //this should return a promise, as writing to the db is async

};
