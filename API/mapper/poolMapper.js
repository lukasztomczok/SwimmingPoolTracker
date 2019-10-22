const PoolDto = require('../model/dto/poolDto');

const mapPool = (pool) => {
  if (!pool) {
    throw new Error('No parameter!');
  }

  if (Array.isArray(pool)) {
    return pool.map((item) => {
      return map(item);
    });
  } else {
    return map(pool);
  }
}

const map = (pool) => {
  return new PoolDto(
    pool.shortName,
    pool.name,
    pool.openTime,
    pool.closeTime,
    pool.exitTime,
    pool.maximuNumbersOfLanes,
    pool.length,
    pool.width,
    pool.address.street,
    pool.address.city,
    pool.address.zipCode);
}

module.exports = mapPool;
