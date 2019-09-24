require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const poolsRouter = require('.//routes/poolsRoutes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Swimming pools API');
});

app.use('/api/pools', poolsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started ${process.env.PORT}`);
});

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2')
  })
})