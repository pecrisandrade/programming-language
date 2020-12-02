const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('pagina inicial\n');
})

app.listen(3000, () => {
	console.log('escutando localhost:3000');
})