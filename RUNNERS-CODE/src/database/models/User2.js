const { DataTypes } = require("sequelize/types");

module.exports= (sequelize, dataTypes) => {

  let alias='Users';
  let cols= {
    id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
    },
    nombre:{
    type: DataTypes.STRING,
    allowNull:false
    },
    apellido:{
    type: DataTypes.STRING,
    allowNull:false
    },
    fechaNacimiento:{
    type: DataTypes.DATE
    },
    documentoTipo:{
    type: DataTypes.STRING
    },
    nDocumento:{
    type: DataTypes.BIGINT
    },
    email:{
    type: DataTypes.STRING,
    allowNull:false
    },
    password:{
    type: DataTypes.STRING,
    allowNull:false
    },
    genero:{
    type: DataTypes.STRING
    },
    categoryUsu_id: {
    type: DataTypes.INTEGER
    }
  };
  let config ={
    tableName:"users",
    timestamps:false
  };

  const User = sequelize.define(alias,cols,config);
    
  User.associate = (models) => {
    // Roles
    User.belongsTo(models.CarroCompras, {
      as: "carroCompra",
      foreignKey: "carroCompra_id",
    });
    User.belongsToMany(models.Ventas,{
      as:"venta",
      through:"Venta_Usuario",
      foreignKey:"user_id",
      otherKey:"venta_id",
      timestamps:false
    });
  };
  return User;
}