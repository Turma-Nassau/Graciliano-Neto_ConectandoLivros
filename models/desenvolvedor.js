'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Desenvolvedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Desenvolvedor.init({
    nome: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    senha: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    desenvolvedor_id: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'Desenvolvedor',
  });
  return Desenvolvedor;
};
