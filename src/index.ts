const baseUrl = process.env.BASE_URL || '/';

const express = require('express');
const app = express();
const router = express.Router();

router.get('/version', (req, res) => {
  res.send({
    version: '1.0.0',
    time: new Date(),
    baseUrl,
  });
});

app.use(`${baseUrl}`, router);

const http = require('http');
const httpServer = http.createServer(app);
httpServer.listen();

console.log(httpServer.address().port);

