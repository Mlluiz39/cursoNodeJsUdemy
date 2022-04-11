const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']  // (nome) é o nome do argumento e para rodar usamos a flag --nome
const profissao = args['profissao']

console.log(nome)
const data = console.log(`Olá ${nome}, você é ${profissao} ?`)