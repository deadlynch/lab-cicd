const http = require('http')
const os = require('os')

const server = http.createServer((req, res) => {
  res.end('Versao 2.0 - Servidor: ' + os.hostname() + '\n')
})

server.listen(3000, () => console.log('Rodando na porta 3000'))