const exec = require('child_process').execFile

const sysctl = (options = '-a') => {
  return new Promise((resolve, reject) => {
    exec('sysctl', options.split(), (error, stdout, stderr) => {
      if (error) {
        reject(error)
      }
      if (stderr) reject(stderr)
      resolve(stdout.trim())
    })
  })
}

module.exports = sysctl
