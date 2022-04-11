// mais de um valor
const x = 10
const y = 'Marcelo Luiz'
const z = [1, 2, 3, 4, 5]

console.log(x, y, z)

// contagem de impressões
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)

// variáveis entre strings
console.log('O valor de x é %d', x)
console.log('Meu nome é %s, e sou programador JS !', y)

// limpar o console
setTimeout(() => {
  console.clear()
}, 3000)
