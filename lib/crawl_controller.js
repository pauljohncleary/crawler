'use strict';

var processor = require('./processor.js'),
  database = require('./shared/database.js');

exports.startCrawl = function(root) {
  return database.query('INSERT INTO crawls (root) VALUES ($1)', root)
    .then(function(data) {
      processor.processLinks([root], [root]);
      return data;
    });
};
