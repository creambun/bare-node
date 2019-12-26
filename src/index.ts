const baseUrl = process.env.BASE_URL || '/';

const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const router = express.Router();

router.use(compression());
router.use(bodyParser.json());

router.get('/version', (req, res) => {
  res.send({
    version: '1.0.0',
    time: new Date(),
    baseUrl,
  });
});

router.use('/group1', require('./group1Router'));

app.use(`${baseUrl}`, router);

const http = require('http');
const httpServer = http.createServer(app);
httpServer.listen();

console.log(httpServer.address().port);
