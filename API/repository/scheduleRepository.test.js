const scheduleRepository = require('../repository/scheduleRepository');


test('return single pool', async () => {
  const pool = {
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
  }

  pool.findByPk = jest.fn().mockReturnValue(pool);

  const poolsContext =
  {
    pool: {
      findByPk: jest.fn().mockReturnValue(pool)
    }
  }

  console.log(poolsContext);
  const repo = scheduleRepository(poolsContext);


  await repo.getPool(1)
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

