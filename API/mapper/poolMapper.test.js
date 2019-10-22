const poolMapper = require('./poolMapper');

test('return pool dto', () => {
  const pool = {
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

  expect(poolMapper(pool)).toEqual({
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
  });
});

test('should throw error on empty pool', () => {
  expect(() => poolMapper()).toThrow('No parameter!');
});