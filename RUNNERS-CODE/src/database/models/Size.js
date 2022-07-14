const { DataTypes } = require("sequelize/types");

module.exports=(sequelize, dataTypes)=>{
    let alias='Sizes';
    let cols= {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            allowfull:false
        },
        size:{
            type: DataTypes.STRING,
        },
        size_description:{
            type: DataTypes.STRING,
        },
        created_at:{
            type: DataTypes.DATE,
        },
        updated_at:{
            type: DataTypes.DATE,
        },

    };

    let config={
        tableName:'sizes',
    }
    const Size = sequelize.define(alias,cols,config);
    Size.belongsToMany(models.Products,{
        as:"product",
        through:"SizesProd",
        foreignKey:"size_id",
        otherKey:"product_id",
        timestamps:false
    })
    return Size;
}
