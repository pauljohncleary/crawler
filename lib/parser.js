'use strict';

// takes a of url and parses it, checks for dups etc.

var url = require('url'),
  validUrl = require('valid-url');

exports.checkLinkObject = function(linkObject) {
  var link = linkObject.link;

  function addReason(linkObject, reason) {
    linkObject.reason = reason;
    return linkObject;
  }

  //this can throw an error if the link isn't a string
  try {
    var parsedUrl = url.parse(link);

    if( parsedUrl.href.substring(0,5) === 'javas' || parsedUrl.href.substring(0,6) === 'mailto') {
      return addReason(linkObject, 'unsupported');
    }

    if (!validUrl.isWebUri(link)) {
      return addReason(linkObject, 'malformed');
    }
  }
  catch(e) {
    return addReason(linkObject, 'malformed');
  }

  //it's good
  return linkObject;

};
