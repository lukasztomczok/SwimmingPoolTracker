const Pool = (sequelize, Sequelize) => {
  var pool = sequelize.define('pool', {
    shortName: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    openTime: {
      type: Sequelize.STRING
    },
    closeTime: {
      type: Sequelize.STRING
    },
    exitTime: {
      type: Sequelize.STRING
    },
    maximumNumberOfLanes: {
      type: Sequelize.INTEGER
    },
    width: {
      type: Sequelize.INTEGER
    },
    length: {
      type: Sequelize.INTEGER
    }
  }, {
      tableName: 'SwimmingPools'
    });

  pool.associate = (models) => {
    pool.hasOne(models.address);
    pool.hasMany(models.schedule);
  }
  return pool
};

module.exports = Pool;
