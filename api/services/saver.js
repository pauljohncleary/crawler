'use strict';

var db = require('../shared/database');

exports.saveLink = function() {

  var query = 'SELECT 1;';

  return db.query(query)
    .then(function(result) {
        return result;
    });

};
