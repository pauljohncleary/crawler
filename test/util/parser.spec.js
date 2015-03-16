/* jshint: -W079 */
'use strict';

var expectIt = require('chai').expect,
  parser = require('../lib/util/parser.js'),
  _ = require('lodash');

describe('Parser', function(){
  var testData = {
    'valid': {
      link: 'http://test.com',
      foundOn: 'dsfkjsadflsadjfkljdsalf'
    },
    'malformed': {
      link: 'sadfsdaf',
      foundOn: '0'
    },
    'unsupported': {
      link: 'javascript("return false")',
      foundOn: '0'
    },
    'null' : {
      link: null,
      foundOn: null
    },
    'duplicate': {
      link: 'www.google.com',
      foundOn: '0'
    }
  };

  it('it should return a url object when presented with a valid url object', function(){
    var valid = testData.valid;
    expectIt( _.has(parser.checkLinkObject(valid), 'link')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(valid), 'foundOn')).to.equal(true);
  });

  it('it should say malformed when malformed urls are found', function(){
    var malformed = testData.malformed;
    expectIt( _.has(parser.checkLinkObject(malformed), 'link')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(malformed), 'foundOn')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(malformed), 'reason')).to.equal(true);
    expectIt(parser.checkLinkObject(malformed).reason).to.equal('malformed');
  });

  it('it should say unsupported when unsupported urls are found', function(){
    var unsupported = testData.unsupported;
    expectIt( _.has(parser.checkLinkObject(unsupported), 'link')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(unsupported), 'foundOn')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(unsupported), 'reason')).to.equal(true);
    expectIt(parser.checkLinkObject(unsupported).reason).to.equal('unsupported');
  });

  it('it should handle null links as malformed', function(){
    var nullLinkObject = testData.null;
    expectIt( _.has(parser.checkLinkObject(nullLinkObject), 'link')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(nullLinkObject), 'foundOn')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(nullLinkObject), 'reason')).to.equal(true);
    expectIt(parser.checkLinkObject(nullLinkObject).reason).to.equal('malformed');
  });

  //tbc how this will work based on db approach
  /*it('it should check for duplicates', function(){
    var duplicate = testData.duplicate;
    expectIt( _.has(parser.checkLinkObject(duplicate), 'link')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(duplicate), 'foundOn')).to.equal(true);
    expectIt( _.has(parser.checkLinkObject(duplicate), 'reason')).to.equal(true);
    expectIt(parser.checkLinkObject(duplicate).reason).to.equal('duplicate');
  });*/
});
