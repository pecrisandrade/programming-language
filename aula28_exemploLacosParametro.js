const http = require('http')
const url = require('url')

const host = '127.0.0.1'
const porta = 8080

const server = http.createServer((req, res) => {
	
	var html = ""

	res.statusCode = 200
	res.serHeader = ('Content-Type', 'text/plain')
	
	res.write('<html><body>')

	console.log(url)

	var obj = url.parse(req.url, true).query
	var inicio = parseInt(obj.inicio)
	var fim = parseInt(obj.fim)

	var i = inicio

	console.log(i, obj.fim, typeof i, typeof obj.fim)

	while(i <= fim){
		console.log(fim)
		res.write(`${i} <br />`)
		i++
	}

	res.write("</body></html>")

	res.end()
})

server.listen(porta, host, () => {
	console.log(`servidor rodando em http://${host}:${porta}/`)
})