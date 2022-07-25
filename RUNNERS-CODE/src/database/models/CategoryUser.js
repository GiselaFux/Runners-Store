module.exports= (sequelize, dataTypes)=>{
    let alias="CategoriesUsers";
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
        tableName:"categoriesusers",
        timestamps: false
    };

    const Category = sequelize.define(alias,cols,config);

    Category.associate =(models) =>{
        //Products
        Category.hasMany(models.Users,{
            as:"users",
            foreignKey:"categoryUsu_id",
        })
    }
    return Category;
}