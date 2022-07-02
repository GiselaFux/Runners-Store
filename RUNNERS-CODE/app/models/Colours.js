module.exports=(sequelize, dataTypes)=>{
    let alias='Colours';
    let cols={
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        colours:{ 
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName:'Colours',
        timestamps: false

    }

}
const Colours= sequelize.define(alias,cols,config)
Colours.associate = (models) => {
    // Products
    Colours.belongsToMany(models.Products,{
        as:"product",
        through:"ColoursProd",
        foreignKey:"colours_id",
        otherKey:"product_id",
        timestamps:false
    });
    }