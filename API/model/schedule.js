const Schedule = (sequelize, DataTypes) => {
  const schedule = sequelize.define('schedule', {
    day: {
      type: DataTypes.DATEONLY
    },
    startTime: {
      type: DataTypes.STRING
    },
    endTime: {
      type: DataTypes.STRING
    },
    tracks: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  },
    {
      tableName: 'Schedules'
    });

  schedule.associate = (models) => {
    schedule.belongsTo(models.pool);
  }
  return schedule;
};

module.exports = Schedule;