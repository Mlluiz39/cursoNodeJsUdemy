const chalk = require('chalk')

const nota = 6

nota >= 7
  ? console.log(chalk.green(`Parabéns, você foi aprovado com a nota ${nota}`))
  : console.log(chalk.bgRed.black('Você foi Reprovado com a nota ', nota))
