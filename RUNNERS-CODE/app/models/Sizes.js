module.exports=(sequelize, dataTypes)=>{
    let alias='Sizes';
    let cols= {
        id:{
            type: dataTypes.INTEGER,
            autoIncrement:true,
            allowfull:false
        },
        size:{
            type: dataTypes.STRING
        }
        };
    let config={
        tableName:'Sizes',
        timestamps:false
    }
    const Sizes =sequelize.define(alias,cols,config);
    Sizes.belongsToMany(models.Products,{
        as:"product",
        through:"SizesProd",
        foreignKey:"size_id",
        otherKey:"product_id",
        timestamps:false
    })

}
