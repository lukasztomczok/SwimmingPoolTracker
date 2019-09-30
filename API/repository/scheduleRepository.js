const { Op } = require('sequelize');
const dc = require('../data/poolsContext');

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
  const occupancy = await dc.schedule.findAll({
    where: {
      day: getDay
    },
    order: [
      ['startTime', 'ASC']
    ]
  });
  return occupancy
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
  return occupancy
};

module.exports = { getLastOccupancy, getDayOccupancy, getTimeOccupancy };