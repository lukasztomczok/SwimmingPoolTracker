const repo = require('../repository/scheduleRepository');

const schedules=[
  
];

const pools = [
  {
    shortName: "olimpijczyk",
    name: "Basen Olimpijczyk",
    openTime: "13:00",
    closeTime: "21:00",
    exitTime: "20:45",
    maximuNumbersOfLanes: 10,
    length: 50,
    width: 25,
    address: {
      street: "Szara",
      city: "Gliwice",
      zipCode: "44-100"
    }
  },
  {
    shortName: "mewa",
    name: "Basen mewa",
    openTime: "13:00",
    closeTime: "21:00",
    exitTime: "20:45",
    maximuNumbersOfLanes: 10,
    length: 50,
    width: 25,
    address: {
      street: "Szara",
      city: "Gliwice",
      zipCode: "44-100"
    }
  }
]

const poolsContext =
{
  pool: {
    findByPk: jest.fn().mockImplementation(() => Promise.resolve(pools[0])),
    findAll: jest.fn().mockImplementation(() => Promise.resolve(pools))
  }
}
const context = { poolsContext: poolsContext };
const scheduleRepository = repo(context);

describe('schedule repository should', () => {
  test('return single pool', async () => {
    await scheduleRepository.getPool(1)
      .then(data => expect(data).toEqual({
        shortName: "olimpijczyk",
        name: "Basen Olimpijczyk",
        openTime: "13:00",
        closeTime: "21:00",
        exitTime: "20:45",
        maximuNumbersOfLanes: 10,
        length: 50,
        width: 25,
        street: "Szara",
        city: "Gliwice",
        zipCode: "44-100"
      }));
  });

  test('return pools array', async () => {
    await scheduleRepository.getPools()
      .then(data => expect(data).toEqual([{
        shortName: "olimpijczyk",
        name: "Basen Olimpijczyk",
        openTime: "13:00",
        closeTime: "21:00",
        exitTime: "20:45",
        maximuNumbersOfLanes: 10,
        length: 50,
        width: 25,
        street: "Szara",
        city: "Gliwice",
        zipCode: "44-100"
      },
      {
        shortName: "mewa",
        name: "Basen mewa",
        openTime: "13:00",
        closeTime: "21:00",
        exitTime: "20:45",
        maximuNumbersOfLanes: 10,
        length: 50,
        width: 25,
        street: "Szara",
        city: "Gliwice",
        zipCode: "44-100"
      }]));
  });
});
