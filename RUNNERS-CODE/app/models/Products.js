module.exports=(sequelize,dataTypes)=>{
    let alias='Products';
    let cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING
        },
        description:{
            type:dataTypes.STRING
        },
        category:{
            type:dataTypes.STRING
        },
        size:{
            type:dataTypes.INTEGER,
            Type:dataTypes.STRING
        },
        price:{
            type:dataTypes.INTEGER
        },
        discount:{
            type:dataTypes.INTEGER
        },
        colours:{
            type:dataTypes.STRING
        }
        
    };
    let config= {
        tableName:"Poducts",
        timestamps:false
    }
    const Products= sequelize.define(alias,cols,config);
    Products.associate = (models) => {
        // Products_Imagen
        Products.hasMany(models.Products_Imagen, {
          as: "products-Imagen",
          foreignKey: "product_id",
        });
        //Categories
        Products.belongsTo(models.Categories,{
            as:"category",
            foreignKey:"category_id"
        });
        //Colours
        Products.belongsToMany(models.Colours,{
            as:"colours",
            through:"ColoursProd",
            foreignKey:"product_id",
            otherKey:"colour_id",
            timestamps:false
        });
        //carrocompras
        Products.belongsTo(models.CarroCompras,{
            as:"carroCompras",
            foreignKey:"carroCompras_id"
        });
        //Size
        Products.belongsToMany(models.Size,{
            as:"size",
            through:"SizesProd",
            foreignKey:"product_id",
            otherKey:"size_id",
            timestamps:false
        })
}}