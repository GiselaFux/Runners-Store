const { DataTypes } = require("sequelize/types");

module.exports= (sequelize, dataTypes)=>{
    let alias="Categories";
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        category_description:{
            type: DataTypes.STRING
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