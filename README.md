# sysctl

Get kernel state.

## Node.js

``` bash
npm install --save sysctl
```

## cli

``` bash
npm install -g sysctl
```

The command ```sysctl-json``` is now available.

## Usage

``` javascript
const sysctl = require('sysctl')

sysctl('machdep.cpu.core_count')
  .then(r => console.log(r))
  .catch(e => console.error(e))

// {
//   machdep: {
//     cpu: {
//       core_count: "4"
//     }
//   }
// }
```
