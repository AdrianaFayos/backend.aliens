'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relacion muchos a muchos
      Alien.belongsTo(models.Pasajero, {
        through: 'PasajeroAlien',
        as: 'pasajeros',
        foreignKey: 'idAlien',
        otherKey: 'idPasajero'
      })
    }
  };
  Alien.init({
    nombre: DataTypes.STRING,
    especie: DataTypes.STRING,
    cumpleaños: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Alien',
  });
  return Alien;
};