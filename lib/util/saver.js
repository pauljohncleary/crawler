'use strict';

var db = require('../shared/database');

exports.saveLink = function() {

  var query = '';

  db.runQuery(query)
    .then(function(result) {
        return result;
    });

};
