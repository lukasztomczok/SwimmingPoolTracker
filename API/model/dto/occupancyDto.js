const scheduleDto = require('./scheduleDto');

class OccupancyDto {
  constructor(date) {
    this.date = date;
    this.schedules = [];
  }
}

module.exports = OccupancyDto;