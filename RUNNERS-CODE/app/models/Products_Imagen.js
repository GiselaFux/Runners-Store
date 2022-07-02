module.exports=(sequelize, dataTypes)=>{
    let alias='ProductImagen';
    let cols={
        id:{
            type: dataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        },
        imagen:{
            type: dataTypes.STRING
        }
    };
    let config={
        tableName:'Products-Imagen',
        timestamps:false
    }
}
const ProductImagen= sequelize.define(alias,cols,config)
ProductImagen.associate = (models) => {
    // Products
    ProductImagen.belongsTo(models.Products, {
      as: "product",
      foreignKey: "product_id",
    });}