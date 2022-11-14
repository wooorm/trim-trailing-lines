import assert from 'node:assert/strict'
import test from 'node:test'
import {trimTrailingLines} from './index.js'

test('trimTrailingLines(value)', function () {
  assert.equal(trimTrailingLines(true), 'true', 'should coerce to string')
  assert.equal(trimTrailingLines(''), '', 'should work (1)')
  assert.equal(trimTrailingLines('foo'), 'foo', 'should work (2)')
  assert.equal(trimTrailingLines('foo\nbar'), 'foo\nbar', 'should work (3)')
  assert.equal(trimTrailingLines('foo\nbar\n'), 'foo\nbar', 'should work (4)')
  assert.equal(trimTrailingLines('foo\nbar\n\n'), 'foo\nbar', 'should work (5)')

  assert.equal(trimTrailingLines('a\n'), 'a', 'lf')
  assert.equal(trimTrailingLines('a\r'), 'a', 'cr')
  assert.equal(trimTrailingLines('a\r\n'), 'a', 'cr+lf')
  assert.equal(trimTrailingLines('\r\r\n\n'), '', 'eols only')
})
