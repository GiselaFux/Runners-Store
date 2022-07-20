module.exports=(sequelize, dataTypes) => {
    let alias="CarroCompras";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        /*productsAmount:{
            type: dataTypes.INTEGER
        }*/
        precioTotal:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cantidadProducts:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        usuario_id:{
            type: dataTypes.INTEGER,
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