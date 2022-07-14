const { DataTypes } = require("sequelize/types");

module.exports=(sequelize, dataTypes)=>{
    let alias='Medios_Pago';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        metodoDePago:{
            type: DataTypes.STRING,
            allowNull:false
        },
        metodoDePagoDesc:{
            type: DataTypes.INTEGER
        },
    };
    let config={
        tableName:'medios_pago',
        timestamps:false
    }

    const Medios_Pago= sequelize.define(alias,cols,config);
    Medios_Pago.associate = (models) => {
        // Ventas
        Medios_Pago.hasMany(models.Ventas, {
        as: "venta",
        foreignKey: "medios_Pago_id",
        })
    };
    return Medios_Pago;
}