const OccupancyDto = require('../model/dto/occupancyDto');
const ScheduleDto = require('../model/dto/scheduleDto');

const mapOccupancy = (day, schedules) => {
  if (!day || !schedules) {
    throw new Error('No parameters!');
  }

  const occupancyDto = new OccupancyDto(day);
  occupancyDto.schedules = schedules.map((schedule) => {
    return new ScheduleDto(schedule.startTime, schedule.endTime, schedule.tracks);
  });

  return occupancyDto;
}

module.exports = mapOccupancy;