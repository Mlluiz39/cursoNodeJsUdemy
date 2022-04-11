const chalk = require('chalk')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Qual sua nota? ', nota => {
  console.log(
    `Com essa nota você foi ${
      nota >= 7 ? chalk.green('aprovado') : chalk.bgRed('reprovado')
    }`
  )
  readline.close()
})
