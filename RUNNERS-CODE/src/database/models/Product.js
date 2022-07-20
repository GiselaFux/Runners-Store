

module.exports=(sequelize,dataTypes)=>{
    let alias='Products';
    let cols={
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        /*category:{
            type:dataTypes.STRING
        },
        size:{
            type:dataTypes.INTEGER,
            Type:dataTypes.STRING
        },*/
        price:{
            type: dataTypes.DECIMAL(10, 2)
        },
        discount:{
            type: dataTypes.INTEGER
        },
        category_id:{
            type: dataTypes.INTEGER
        },
        /*colours:{
            type:dataTypes.STRING
        }*/

        
    };
    let config= {
        tableName:"products",
        timestamps: false
    }
    const Product= sequelize.define(alias,cols,config);
    Product.associate = (models) => {
        // Products_Imagen
        Product.hasMany(models.ProductImagen, {
          as: "productImagenes",
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
            through:"coloursprod",
            foreignKey:"prod_id",
            otherKey:"colour_id",
            timestamps:false
        });
        //carrocompras
        Product.belongsTo(models.CarroCompras,{
            as:"carroCompras",
            foreignKey:"carroCompras_id"
        });
        //Size
        Product.belongsToMany(models.Sizes,{
            as:"sizes",
            through:"sizesprod",
            foreignKey:"prod_id",
            otherKey:"sizes_id",
            timestamps:false
        })
    };
    return Product;
}