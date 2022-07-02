module.exports= (sequelize, dataTypes)=>{
    let alias="Categories";
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        category:{
            type: dataTypes.STRING
        }
    };
    let config={
        tableName:"Categories",
        timestamps: false
    }
}
const Categories= sequelize.define(alias,cols,config);
Categories.associate =(models) =>{
    //Products
    Categories.hasMany(models.Products,{
        as:"products",
        foreignKey:"category_id",
    })
}