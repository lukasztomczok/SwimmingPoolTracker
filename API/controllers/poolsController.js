const repo = require('../repository/scheduleRepository');
const dc = require('../data/poolsContext');

const getOccupancy = async (req, res, next) => {
  try {
    let occupancy = {};
    if (req.query.time) {
      occupancy = await repo.getTimeOccupancy(req.query.day, req.query.time);
    }
    else {
      occupancy = await repo.getDayOccupancy(req.query.day);
    }
    return res.json(occupancy);
  }
  catch (error) {
    next(error);
  }
  return res.status(400).send('Bad request');
}

const getLastOccupancy = async (req, res, next) => {
  try {
    const occupancy = await repo.getLastOccupancy();
    return res.json(occupancy);
  }
  catch (error) {
    next(error);
  }
  return res.status(400).send('Bad request');
}

const getPools = async (req, res, next) => {
  try {
    const pools = await repo.getPools();
    return res.json(pools);
  } catch (error) {
    next(error);
  }
  return res.status(400).send('Bad Request');
};

const getPool = async (req, res, next) => {
  try {
    const pool = await repo.getPool(req.params.poolId);
    return res.json(pool);
  } catch (error) {
    next(error);
  }
  return res.status(400).send('Bad Request');
};

module.exports = { getLastOccupancy, getOccupancy, getPool, getPools };
