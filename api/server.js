const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');
const express = require('express');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'database/db.json'));
const middlewares = jsonServer.defaults();

server.use('/static', express.static(path.join(__dirname, 'public')))
server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 3000;

server.listen(PORT, () => {
	console.log(`JSON Server is running on http://localhost:${PORT}`);
});