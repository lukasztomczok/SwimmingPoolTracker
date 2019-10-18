const { Op } = require('sequelize');
const poolMapper = require('../mapper/poolMapper');
const occupancyMapper = require('../mapper/occupancyMapper');

const scheduleRepository = ({poolsContext}) => {
  const dc = poolsContext;
  const getLastOccupancy = async () => {
    const occupancy = await dc.schedule.findAll({
      limit: 1,
      order: [
        ['day', 'DESC']
      ]
    });
    return occupancy
  };

  const getDayOccupancy = async (getDay) => {
    const schedules = await dc.schedule.findAll({
      where: {
        day: getDay
      },
      order: [
        ['startTime', 'ASC']
      ]
    });

    const occupancyDto = occupancyMapper(getDay, schedules);
    return occupancyDto;
  };

  const getTimeOccupancy = async (getDay, getTime) => {
    const occupancy = await dc.schedule.findAll({
      where: {
        day: getDay,
        endTime:
        {
          [Op.gte]: getTime
        }
      },
      order: [
        ['startTime', 'ASC']
      ]
    });
    const occupancyDto = occupancyMapper(getDay, schedules);
    return occupancyDto;
  };

  const getPools = async () => {
    const pools = await dc.pool.findAll({ include: dc.address });
    return poolMapper(pools);
  };

  const getPool = async (poolId) => {
    const pool = await dc.pool.findByPk(poolId, { include: dc.address });
    return poolMapper(pool);
  };

  return { getLastOccupancy, getDayOccupancy, getTimeOccupancy, getPools, getPool };
}

module.exports = scheduleRepository;