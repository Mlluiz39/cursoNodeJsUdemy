const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  const infoUrl = url.parse(req.url, true)
  const { name } = infoUrl.query

  if (!name) {
    fs.readFile('index.html', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  } else {
    const nameNewLine = `${name},${'\r\n'}`
    fs.appendFile('arquivo.txt', nameNewLine, (error, data) => {
      res.writeHead(302, { location: '/' })
      res.end()
    })
  }
})

server.listen(port, () => console.log(`🚀 Server running on port ${port}`))
