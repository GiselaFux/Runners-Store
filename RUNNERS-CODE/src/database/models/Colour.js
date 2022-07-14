const { DataTypes } = require("sequelize/types");

module.exports=(sequelize, dataTypes)=>{
    let alias='Colours';
    let cols={
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        colours:{ 
            type: DataTypes.STRING,
            allowNull:false
        },
        created_at:{
            type: DataTypes.DATE,
        },
        updated_at:{
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName:'colours',
        timestamps: false

    };


    const Colour= sequelize.define(alias,cols,config)
    Colour.associate = (models) => {
    // Products
        Colour.belongsToMany(models.Products,{
            as:"product",
            through:"ColoursProd",
            foreignKey:"colours_id",
            otherKey:"product_id",
            timestamps:false
        });
    }
    return Colour;
}