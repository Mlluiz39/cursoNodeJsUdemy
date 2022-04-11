const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Olã este é meu primeiro server com HTML!</h1><p>Teste de atualização</p>')
})

server.listen(port, () => console.log(`🚀 Server running on port ${port}`))
