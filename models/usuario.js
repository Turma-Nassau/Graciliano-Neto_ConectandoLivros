'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Desenvolvedor,{onDelete:'CASCADE', onUpdate:'CASCADE'})
      Usuario.hasMany(models.Livros,{onDelete:'CASCADE', onUpdate:'CASCADE'})
    }
  }
  Usuario.init({
    nome: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING(40),
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
    user_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};

//module.exports = Usuario;