
module.exports= (sequelize, dataTypes) => {

  let alias='Users';
  let cols= {
    id:{
    type: dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
    },
    nombre:{
    type: dataTypes.STRING,
    allowNull:false
    },
    apellido:{
    type: dataTypes.STRING,
    allowNull:false
    },
    fechaNacimiento:{
    type: dataTypes.DATE
    },
    documentoTipo:{
    type: dataTypes.STRING
    },
    nDocumento:{
    type: dataTypes.BIGINT
    },
    email:{
    type: dataTypes.STRING,
    allowNull:false
    },
    password:{
    type: dataTypes.STRING,
    allowNull:false
    },
    genero:{
    type: dataTypes.STRING
    },
    categoryUsu_id: {
    type: dataTypes.INTEGER
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