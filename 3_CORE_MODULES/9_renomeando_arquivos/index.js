const fs = require('fs')

const oldFile = 'antigo.txt'
const newFile = 'novo.txt'

fs.rename(oldFile, newFile, error => {
  if (error) {
    console.log(error)
    return
  }

  console.log(`O documento ${oldFile} foi renomeado para ${newFile}!`)
})
