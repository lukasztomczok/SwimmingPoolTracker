const Address = (sequelize, Sequelize) => {
  var address = sequelize.define('address', {
    street: {
      type: Sequelize.STRING
    },
    zipCode: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  }, {
      tableName: 'Address'
    });

    address.associate = (models) => {
      address.belongsTo(models.pool);
    }
  return address;
};

module.exports = Address;