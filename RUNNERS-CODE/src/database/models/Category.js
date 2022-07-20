
module.exports= (sequelize, dataTypes)=>{
    let alias="Categories";
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        category_description:{
            type: dataTypes.STRING
        }
    };

    let config={
        tableName:"categories",
        timestamps: false
    };

    const Category = sequelize.define(alias,cols,config);

    Category.associate =(models) =>{
        //Products
        Category.hasMany(models.Products,{
            as:"products",
            foreignKey:"category_id",
        })
    }
    return Category;
}