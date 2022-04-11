const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Digite seu usuário:',
    },
    {
      name: 'email',
      message: 'Digite seu email:',
    },
  ])
  .then(answers => {
    if (!answers.name || !answers.email) {
      throw new Error('Nome e email são obrigatórios!')
    }
    const users = `O nome de usuário é ${answers.name} e seu email é ${answers.email}`
    console.log(chalk.bgYellow.black(users))
  })
  .catch(error => console.log(error))
