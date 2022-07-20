

module.exports=(sequelize, dataTypes)=>{
    let alias='Colours';
    let cols={
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        colour:{ 
            type: dataTypes.STRING,
            allowNull:false
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
            through:"coloursprod",
            foreignKey:"colour_id",
            otherKey:"prod_id",
            timestamps:false
        });
    }
    return Colour;
}