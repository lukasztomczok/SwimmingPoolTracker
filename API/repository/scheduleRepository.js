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

module.exports = { getLastOccupancy };