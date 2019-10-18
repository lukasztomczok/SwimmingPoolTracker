jest.mock('sequelize');
jest.mock('../model/pool');
jest.mock('../model/address');
jest.mock('../model/schedule');
jest.mock('../repository/scheduleRepository');
//jest.mock('../data/poolsContext');

const repo = require('../repository/scheduleRepository');
const controller = require('./poolsController');
const db = require('../data/poolsContext');
const poolModel = require('../model/pool');




test('should return pool', async () => {
  const pool = {
    shortName: "olimpijczyk"
  };

  const request = {
    params: {
      poolId: 1
    }
  };
  poolModel.mockImplementation((s, S) => { pool });
  // db.pool=jest.fn().mockReturnValue(pool);
  // db.address=jest.fn().mockReturnValue({});
  // db.schedule=jest.fn().mockReturnValue({});

  const response = jest.fn();
  response.json = jest.fn().mockReturnValue(pool);
  const next = jest.fn();

  repo.getPool.mockReturnValue(pool);

  await controller.getPool(request, response, next)
    .then(data => expect(data).toEqual(pool));
});

// test('should call next() function', async () => {
//   const request = {
//   };

//   const response = {};
//   response.send = jest.fn();
//   response.status = jest.fn().mockImplementation(() => { return response });
//   const next = jest.fn();

//   repo.getPool.mockImplementation(() => { throw new Error('Not found') });

//   await controller.getPool(request, response, next);
//   expect(next).toHaveBeenCalled();
// });
