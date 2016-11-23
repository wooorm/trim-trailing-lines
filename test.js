'use strict';

var test = require('tape');
var trimTrailingLines = require('./');

test('trimTrailingLines(value)', function (t) {
  t.equal(trimTrailingLines(true), 'true', 'should coerce to string');
  t.equal(trimTrailingLines(''), '', 'should work (1)');
  t.equal(trimTrailingLines('foo'), 'foo', 'should work (2)');
  t.equal(trimTrailingLines('foo\nbar'), 'foo\nbar', 'should work (3)');
  t.equal(trimTrailingLines('foo\nbar\n'), 'foo\nbar', 'should work (4)');
  t.equal(trimTrailingLines('foo\nbar\n\n'), 'foo\nbar', 'should work (5)');
  t.end();
});
