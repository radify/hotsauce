'use strict';

// Support:
// - config changes
// - package installs
// - catching fatal errors (e.g. ref errors, etc.)

const http = require('http');
const express = require('express');
const hotLoader = require('chokidar-socket-emitter');
const clientBootstrap = require('./hot-reload-client');

// const isProd = (process.env.NODE_ENV === 'production');
const app = express();
const server = http.createServer(app);

hotLoader({ app: server });
app.use(clientBootstrap);


// Serve assets in /public
app.use(express.static('public'));

server.listen(9089);

console.log('Server running on port 9089');