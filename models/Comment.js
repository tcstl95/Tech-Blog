const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      validate:{
        len:[8]
      }
    },
    id_user: {
      type: DataTypes.STRING,
      allowNull: false,
      references:{
        model: 'user',
        key: 'id'
      }
    },
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'post',
        key: 'id'
      }
    }
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName:'Comment',
  }
);

module.exports = Comment;
