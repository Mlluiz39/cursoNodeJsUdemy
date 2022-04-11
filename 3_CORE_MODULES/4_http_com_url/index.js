const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true)
  const { name } = urlInfo.query

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  if (!name) {
    res.end(
      '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="enviar"/></form>'
    )
  } else {
    res.end(`<h1>Seja bem vindo(a) ${name}!</h1>`)
  }
})

server.listen(port, () => console.log(`🚀 Server running on port ${port}`))
