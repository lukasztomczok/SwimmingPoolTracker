require('dotenv').config();
const express = require('express');
const poolsRouter=require('.//routes/poolsRoutes');

const app = express();

app.get('/', (req, res) => {
  res.send('Hej');
});

app.use('/pools', poolsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started ${process.env.PORT}`);
});