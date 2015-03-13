'use strict';

var pg = require('pg');

//db comes from flynn
var username = process.env.PGUSER,
  password = process.env.PGPASSWORD,
  host = process.env.PGHOST,
  database = process.env.PGDATABASE,
  conString = `postgres://${username}:${password}@${host}/${database}`;

exports.testConnection = function() {
  return pg.connect(conString, function(err, client, done) {
    if(err || !client) {
      return false;
    }
    done();
  });
};

exports.saveLink = function() {

  var query = '';

  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(query, ['1'], function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      client.end();
    });
  });



};
