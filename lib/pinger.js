'use strict';

//ping a url

var rp = require('request-promise');

exports.ping = function(linkObject) {
  var options = {
    uri: linkObject.link,
    method : 'GET',
    simple: false,
    resolveWithFullResponse: true
  };

  //start the response timer
  var start = Date.now();

  return rp(options)
    .then(function(response) {
      linkObject.responseTime = (Date.now() - start);
      linkObject.statusCode = response.statusCode;
      return linkObject;
    });
};
