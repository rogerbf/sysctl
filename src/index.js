const sysctl = require('./lib/sysctl.js')
const parse = require('dotpath-object-create')
const assign = require('deep-assign')

const execute = (variableName) => {
  return new Promise((resolve, reject) => {
    sysctl(variableName)
      .then(variables => {
        const results = variables
          .split('\n')
          .map(entry => {
            const path = entry.slice(0, entry.indexOf(':'))
            const value = entry.slice(entry.indexOf(':') + 1).trim()
            return parse(path, value)
          })
          .reduce((acc, val) => {
            return assign({}, acc, val)
          }, {})
          resolve(results)
      })
      .catch(e => reject(e))
  })
}

module.exports = execute
