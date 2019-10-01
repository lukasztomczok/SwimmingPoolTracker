class ScheduleDto {
  constructor(startTime, endTime, tracks) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.tracks = tracks;
  }
}

module.exports = ScheduleDto;