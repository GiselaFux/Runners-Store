module.exports=(sequelize, dataTypes) => {
    let alias="CarroCompras";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        productsAmount:{
            type: dataTypes.INTEGER
        }
    };
    let config={
        tableName:"CarroCompras",
        timestamps:false
    }
    const CarroCompras=sequelize.define(alias,cols,config);
    CarroCompras.associate = (models) => {
        // Products
        CarroCompras.hasMany(models.Products, {
          as: "products",
          foreignKey: "carroCompras_id",
        });
}}