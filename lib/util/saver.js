'use strict';

var pgpromise = require('pg-promise')();

//db comes from flynn, if not assume we're on a dev build
var username = process.env.PGUSER || 'postgres',
  password = process.env.PGPASSWORD || 'password',
  host = process.env.PGHOST || '127.0.0.1:5432',
  database = process.env.PGDATABASE || 'bughunt',
  conString = `postgres://${username}:${password}@${host}/${database}`,
  db = pgpromise(conString);

exports.testConnection = function() {
  return db.one('SELECT 1')
    .then(function(data) {
      return data;
    });
};

exports.saveLink = function() {

  var query = '';

  db.connect(conString, function(err, client, done) {
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
