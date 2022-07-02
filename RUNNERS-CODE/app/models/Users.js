module.exports= (sequelize, dataTypes) => {
    let alias='Users';
    let cols= {
       id:{
        type:dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
},
       nombre:{
        type:dataTypes.STRING,
        allowNull:false
       },
       apellido:{
        type:dataTypes.STRING,
        allowNull:false
       },
       fechaNacimiento:{
        type:dataTypes.DATE
       },
       documentoTipo:{
        type:dataTypes.STRING
       },
       nDocumento:{
        type:dataTypes.INTEGER
       },
       email:{
        type:dataTypes.STRING,
        allowNull:false
       },
       password:{
        type:dataTypes.STRING
       },
       genero:{
        type:dataTypes.STRING
       }
      };
      let config ={
        tableName:"Usuarios",
          timestamps:false
      }
      const Users = sequelize.define(alias,cols,config);
      Users.associate = (models) => {
        // Roles
        Users.belongsTo(models.CarroCompras, {
          as: "carroCompra",
          foreignKey: "carroCompra_id",
        });
        Users.belongsToMany(models.Ventas,{
            as:"venta",
            through:"Venta_Usuario",
            foreignKey:"user_id",
            otherKey:"venta_id",
            timestamps:false
        })
}}