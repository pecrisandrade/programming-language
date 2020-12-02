const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('pagina inicial\n');
})

app.get('/sobre', (req, res) =>{
	res.send('Sobre\n')
})

app.get('/jogar', (req, res) => {
	res.send('Jogar\n');
})

app.get('/ajuda', (req, res) =>{
	res.send('ajuda\n');
})

app.listen(3000)