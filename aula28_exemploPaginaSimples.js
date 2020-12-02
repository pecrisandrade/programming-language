const http = require('http')

const host = '127.0.0.1'
const porta = 3000

const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.serHeader = ('Content-Type', 'text/plain')
	res.write('eu sou uma pagina!')
	res.end()
})

server.listen(porta, host, () => {
	console.log(`servidor rodando em http://${host}${porta}/`)
})