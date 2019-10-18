const log = require('../helpers/logConfig');


module.exports = ({ scheduleRepository }) => {
  const getOccupancy = async (req, res, next) => {
    try {
      let occupancy = {};
      if (req.query.time) {
        occupancy = await scheduleRepository.getTimeOccupancy(req.query.day, req.query.time);
      }
      else {
        occupancy = await scheduleRepository.getDayOccupancy(req.query.day);
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
      const occupancy = await scheduleRepository.getLastOccupancy();
      return res.json(occupancy);
    }
    catch (error) {
      next(error);
    }
    return res.status(400).send('Bad request');
  }

  const getPools = async (req, res, next) => {
    try {
      const pools = await scheduleRepository.getPools();
      return res.json(pools);
    } catch (error) {
      log.info(error);
      next(error);
    }
    return res.status(400).send('Bad Request');
  };

  const getPool = async (req, res, next) => {
    try {
      const pool = await scheduleRepository.getPool(req.params.poolId);
      return res.json(pool);
    } catch (error) {
      next(error);
    }
    return res.status(400).send('Bad Request');
  };
  return { getLastOccupancy, getOccupancy, getPool, getPools };
}