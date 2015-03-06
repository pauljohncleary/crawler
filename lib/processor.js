'use strict';

var pinger = require('./pinger.js'),
  parser = require('./parser.js'),
  saver = require('./saver.js');

function getNextLink(arrayOfLinks) {
  var link = arrayOfLinks.shift();
  return {
    next: link,
    remaining: arrayOfLinks
  };
}

function parsePingSave(remaining, current) {
  if(remaining.length > 0) {
    var links = getNextLink(remaining),
      updatedRemaining = links.remaining,
      next = links.next;

    //create our linkObject
    var linkObject = {
      link: next,
      foundOn: current
    };

    //will probably need some logic around here to handle failures etc.
    var parsed = parser.checkLinkObject(linkObject);
    return pinger.ping(parsed).then(function(pinged) {
      return saver.saveLink(pinged).then(function() {
        return parsePingSave(updatedRemaining, current);
      });
    });

  } else {
    return true;
  }

}


exports.processLinks = function(remaining, current) {
  return parsePingSave(remaining, current);
};
