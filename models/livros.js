'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livros.init({
    titulo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    editora: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      edicao: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    ano_publicacao: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    id_book: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'Livros',
  });
  return Livros;
};