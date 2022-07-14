const { DataTypes } = require("sequelize/types");

module.exports=(sequelize, dataTypes) => {
    let alias="CarroCompras";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        created_at:{
            type: DataTypes.DATE,
        },
        updated_at:{
            type: DataTypes.DATE,
        },
        /*productsAmount:{
            type: dataTypes.INTEGER
        }*/
        precioTotal:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidadProducts:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuario_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config={
        tableName:"carrocompras",
        timestamps:false
    };

    const CarroCompra=sequelize.define(alias,cols,config);
    CarroCompra.associate = (models) => {
        // Products
        CarroCompra.hasMany(models.Products, {
          as: "products",
          foreignKey: "carroCompras_id",
        });
    }
    return CarroCompra;
}