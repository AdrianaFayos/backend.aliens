'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Curriculum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  Curriculum.init({
    idPasajero: DataTypes.INTEGER,
    experiencia: DataTypes.STRING,
    educacion: DataTypes.STRING,
    titulo: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Curriculum',
  });
  return Curriculum;
};