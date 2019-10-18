require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const poolsRouter = require('./routes/poolsRoutes');
const poolsController = require('./controllers/poolsController');
const poolsContext = require('./data/poolsContext');
const scheduleRepository = require('./repository/scheduleRepository');
const awilix = require('awilix');

const { createContainer, asValue, asFunction, asClass } = awilix;

// Create a container.
const container = createContainer();
container.register({
  poolsRouter: asFunction(poolsRouter).scoped(),
  poolsController: asFunction(poolsController).scoped(),
  poolsContext: asFunction(poolsContext).scoped(),
  scheduleRepository: asFunction(scheduleRepository).scoped()
});

const scope = container.createScope();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.container = scope;
  next();
});

app.get('/', (req, res) => {
  res.send('Swimming pools API');
});

app.use('/api/pools', scope.resolve('poolsRouter'));

app.listen(process.env.PORT, () => {
  console.log(`Server started ${process.env.PORT}`);
});

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})