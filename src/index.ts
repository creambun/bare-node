const baseUrl = process.env.BASE_URL || '/';

const express = require('express');
const app = express();
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.get('/version', (req, res) => {
  res.send({
    version: '1.0.0',
    time: new Date(),
    baseUrl,
  });
});

router.use('/persons', require('./personsRouter'));


const cors = require('cors');
app.use(cors());
const compression = require('compression');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`${baseUrl}`, router);

const http = require('http');
const httpServer = http.createServer(app);
httpServer.listen();

console.log(httpServer.address().port);
