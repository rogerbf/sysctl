const test = require('tape')
const parse = require('./lib/parser.js')

test('parse()', assert => {
  assert.ok(typeof parse() === 'string')
  assert.end()
})
