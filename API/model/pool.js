const Pool = (sequelize, Sequelize) => {
  var pool = sequelize.define('pool', {
    shortName: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    openTime: {
      type: Sequelize.STRING
    }
  }, {
      tableName: 'SwimmingPools'
    });

  pool.associate = (models) => {
    pool.hasOne(models.address);
  }
  return pool
};

module.exports = Pool;