const path = require('path')
const express = require('express')
const http = require('http')

const api = require('./api')
//const app = require('./app')

const app = express();
const httpServer = http.createServer(app);
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Server middleware
 */
app.use(require('serve-static')(path.join(__dirname, 'build')))

/**
 * API Endpoints
 */
app.get('/api/0/search', api.search);

app.get('/api/0/popular', api.popular);

app.get('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, 'images', 'favicon.ico')));

/**
 * Universal Application endpoint
 */
app.get('*', (req, res) => res.render('index'));

httpServer.listen(port);