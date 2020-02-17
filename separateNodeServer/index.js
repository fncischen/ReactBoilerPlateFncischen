const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const https = require('https');
const fs = require('fs');

const router = require('./routes/routes.js');
const port = 3000;

http
  .createServer(server)
  .listen(port, () => console.log(`Example app listening on port ${port}!`));

server.use(bodyParser.json());
server.use('/myApi', router);
