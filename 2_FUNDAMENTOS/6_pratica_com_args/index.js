// externo
const minimist = require('minimist')

//interno
const sum = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(sum(a, b))







