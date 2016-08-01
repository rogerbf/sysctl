const test = require('tape')
const sysctl = require('./index.js')

test('sysctl()', assert => {
  assert.ok(typeof sysctl() === 'object')
  assert.end()
})
