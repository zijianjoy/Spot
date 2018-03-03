const express = require('express');
const app = express();


app.get('/', (req, res) => {
	res.send({ hi: 'there'});
})

app.get('/map', (req, res) => {
	res.send({ hit: 'map'});
})

app.listen(8080);