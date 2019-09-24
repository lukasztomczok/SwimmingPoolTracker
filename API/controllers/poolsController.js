const dc = require('../data/poolsContext');

const getPools = async (req, res, next) => {
  try {
    const pools = await dc.pool.findAll({ include: dc.address });
    return res.json(pools);
  } catch (error) {
    next(error);
  }
  return res.status(400).send('Bad Request');
};

const getPool = async (req, res, next) => {
  try {
    const pool = await dc.pool.findByPk(req.params.poolId, { include: dc.address });
    return res.json(pool);
  } catch (error) {
    next(error);
  }
  return res.status(400).send('Bad Request');
};

const addPool = async (req, res, next) => {
  try {
    const pool = dc.pool.build
      ({
        shortName: req.body.shortName,
        openTime: req.body.openTime,
        address: {
          city: req.body.address.city,
          zipCode: req.body.address.zipCode,
          street: req.body.address.street
        }
      },
        {
          include: dc.address
        });

    await pool.save();

    return res.status(201).json(pool);
  }
  catch (error) {
    next(error);
  }
  return res.status(400).send('Bad Request');
};

module.exports = { getPool, getPools, addPool };
