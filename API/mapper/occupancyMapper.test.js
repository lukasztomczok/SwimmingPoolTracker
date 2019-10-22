const occupancyMapper = require('./occupancyMapper');

const schedules = [{
  day: '01-01-2018',
  startTime: '08:00',
  endTime: '15:00',
  tracks: [
    '8x50',
    '8x25',
    '1x50'
  ]
},
{
  day: '01-01-2018',
  startTime: '16:00',
  endTime: '19:00',
  tracks: [
    '8x40',
    '8x45',
    '1x40'
  ]
}]

describe('occupancy mapper', () => {
  test('should return occupancy dto', () => {
    expect(occupancyMapper(schedules[0].day, schedules)).toEqual({
      date: '01-01-2018',
      schedules: [
        {
          startTime: '08:00',
          endTime: '15:00',
          tracks: [
            '8x50',
            '8x25',
            '1x50'
          ]
        },
        {
          startTime: '16:00',
          endTime: '19:00',
          tracks: [
            '8x40',
            '8x45',
            '1x40'
          ]
        }        
      ]
    });
  });

  test('should throw on empty parameters', () => {
    expect(() => occupancyMapper(schedules)).toThrow('No parameters!');
  });
});