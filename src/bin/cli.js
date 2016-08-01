#!/usr/bin/env node

const sysctl = require('../index.js')

sysctl(process.argv[2])
  .then(r => console.log(JSON.stringify(r, null, 2)))
  .catch(e => console.error(e))
