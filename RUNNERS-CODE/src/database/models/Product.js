const { DataTypes } = require("sequelize/types");

module.exports=(sequelize,dataTypes)=>{
    let alias='Products';
    let cols={
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        /*category:{
            type:dataTypes.STRING
        },
        size:{
            type:dataTypes.INTEGER,
            Type:dataTypes.STRING
        },*/
        price:{
            type: DataTypes.DECIMAL(10, 2)
        },
        discount:{
            type: DataTypes.INTEGER
        },
        category_id:{
            type: DataTypes.INTEGER
        },
        /*colours:{
            type:dataTypes.STRING
        }*/
        created_at:{
            type: DataTypes.DATE
        },
        updated_at:{
            type: DataTypes.DATE
        },
        
    };
    let config= {
        tableName:"products",
    }
    const Product= sequelize.define(alias,cols,config);
    Product.associate = (models) => {
        // Products_Imagen
        Product.hasMany(models.Products_Imagen, {
          as: "products-Imagen",
          foreignKey: "product_id",
        });
        //Categories
        Product.belongsTo(models.Categories,{
            as:"category",
            foreignKey:"category_id"
        });
        //Colours
        Product.belongsToMany(models.Colours,{
            as:"colours",
            through:"ColoursProd",
            foreignKey:"product_id",
            otherKey:"colour_id",
            timestamps:false
        });
        //carrocompras
        Product.belongsTo(models.CarroCompras,{
            as:"carroCompras",
            foreignKey:"carroCompras_id"
        });
        //Size
        Product.belongsToMany(models.Size,{
            as:"size",
            through:"SizesProd",
            foreignKey:"product_id",
            otherKey:"size_id",
            timestamps:false
        })
    };
    return Product;
}