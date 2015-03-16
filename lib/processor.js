'use strict';

var pinger = require('./util/pinger.js'),
  parser = require('./util/parser.js'),
  saver = require('./util/saver.js');

function getNextLink(arrayOfLinks) {
  var link = arrayOfLinks.shift();
  return {
    next: link,
    remaining: arrayOfLinks
  };
}

//Take an array of remaining links, the current link and parse it, ping it before finally saving it
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
