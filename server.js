#!/usr/bin/env node
'use strict';

var debug = require('debug')('crawler');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var crawlControler = require('./lib/crawl_controller');

app.set('port', process.env.PORT || 5001);

var server = app.listen(app.get('port'), function() {
  debug('The crawler is listening on port ' + server.address().port);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.all('/crawl', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.post('/crawl', function(req, res, next) {
  crawlControler.startCrawl('http://tab.bz');
  res.status(200);
  next();
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
