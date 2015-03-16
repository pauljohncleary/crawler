'use strict';

var processor = require('./processor.js'),
  database = require('./shared/database.js');

exports.startCrawl = function(root) {
  var start = Date.now();

  return database.query(`INSERT INTO crawl NEED TO WRITE THIS ${root} ${start}`)
    .then(function(data) {
      processor.processLinks([root], [root]);
      return data;
    });
};
