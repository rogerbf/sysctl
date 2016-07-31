const sysctl = require('./lib/sysctl.js')
const parse = require('./lib/parser.js')
const assign = require('deep-assign')

sysctl('security')
  .then(d => {
    const r = d.split('\n')
    .map(entry => {
      const path = entry.slice(0, entry.indexOf(':'))
      const value = entry.slice(entry.indexOf(':') + 1).trim()
      return parse(path, value)
    })
    .reduce((acc, val) => {
      return assign({}, acc, val)
    }, {})
    console.log(r)
  })
  .catch(e => console.error('error:', e))

module.exports = {}
