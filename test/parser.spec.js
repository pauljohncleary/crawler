'use strict';

var expect = require('chai').expect,
  parser = require('../lib/parser.js'),
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
    expect( _.has(parser.checkLinkObject(valid), 'link')).to.equal(true);
    expect( _.has(parser.checkLinkObject(valid), 'foundOn')).to.equal(true);
  });

  it('it should say malformed when malformed urls are found', function(){
    var malformed = testData.malformed;
    expect( _.has(parser.checkLinkObject(malformed), 'link')).to.equal(true);
    expect( _.has(parser.checkLinkObject(malformed), 'foundOn')).to.equal(true);
    expect( _.has(parser.checkLinkObject(malformed), 'reason')).to.equal(true);
    expect(parser.checkLinkObject(malformed).reason).to.equal('malformed');
  });

  it('it should say unsupported when unsupported urls are found', function(){
    var unsupported = testData.unsupported;
    expect( _.has(parser.checkLinkObject(unsupported), 'link')).to.equal(true);
    expect( _.has(parser.checkLinkObject(unsupported), 'foundOn')).to.equal(true);
    expect( _.has(parser.checkLinkObject(unsupported), 'reason')).to.equal(true);
    expect(parser.checkLinkObject(unsupported).reason).to.equal('unsupported');
  });

  it('it should handle null links as malformed', function(){
    var nullLinkObject = testData.null;
    expect( _.has(parser.checkLinkObject(nullLinkObject), 'link')).to.equal(true);
    expect( _.has(parser.checkLinkObject(nullLinkObject), 'foundOn')).to.equal(true);
    expect( _.has(parser.checkLinkObject(nullLinkObject), 'reason')).to.equal(true);
    expect(parser.checkLinkObject(nullLinkObject).reason).to.equal('malformed');
  });

  it('it should check for duplicates', function(){
    var duplicate = testData.duplicate;
    expect( _.has(parser.checkLinkObject(duplicate), 'link')).to.equal(true);
    expect( _.has(parser.checkLinkObject(duplicate), 'foundOn')).to.equal(true);
    expect( _.has(parser.checkLinkObject(duplicate), 'reason')).to.equal(true);
    expect(parser.checkLinkObject(duplicate).reason).to.equal('duplicate');
  });
});
