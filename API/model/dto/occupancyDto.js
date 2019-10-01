const scheduleDto = require('./scheduleDto');

class OccupancyDto {
  constructor(date, schedules) {
    this.date = date;
    this.schedules = schedules.map((schedule) => {
      return new scheduleDto(schedule.startTime, schedule.endTime, schedule.tracks);
    });
  }
}

module.exports = OccupancyDto;