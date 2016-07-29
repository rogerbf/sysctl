const sysctl = require('./lib/sysctl.js')

sysctl('security').then(d => console.log(d)).catch(e => console.error('error:', e))

module.exports = {}
