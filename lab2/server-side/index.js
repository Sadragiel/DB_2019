const express = require('express');
const path = require('path');
const config = require('./config');   

const logger = require('morgan');
const bodyParser = require('body-parser');
const busboyBodyParser = require('busboy-body-parser');

const app = express();
const PORT = parseInt(config.ServerPort);

const client = require('./connection');
const api = require('./routes');

if (!Number.isInteger(PORT)) {
    console.error('Bad port, please set PORT as anv variable');
    process.abort();
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(busboyBodyParser({}));

app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname + '/../dist/')));

app.use('/api/v1', api);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.use((err, req, res) => {
    console.error(err.stack);
    return res.status(500).end(`Internal srever error: ${err.message}`);
});

client.connect() 

const server = app.listen(PORT, () => console.log('Server started at port:', PORT));

//to close connections
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Process terminated')
    });
    client.end();
})


