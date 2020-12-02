const http = require('http')
const url = require('url')

const host = '127.0.0.1'
const porta = 8080

const server = http.createServer((req, res) => {
	
	var html = ""

	res.statusCode = 200
	res.serHeader = ('Content-Type', 'text/plain')
	
	res.write('<html><body><table>')

	console.log(url)

	var obj = url.parse(req.url, true).query
	var linhas = parseInt(obj.linhas)
	var colunas = parseInt(obj.colunas)

	

	for (i = 0; i < linhas; i++){
		res.write("<tr>");
		for(j = 0; j < colunas; j++){
			res.write(`<td style='border: 1px solid black;'>${i}${j}`)
		}
	}

	res.write("<table/></body></html>")

	res.end()
})

server.listen(porta, host, () => {
	console.log(`servidor rodando em http://${host}:${porta}/`)
})