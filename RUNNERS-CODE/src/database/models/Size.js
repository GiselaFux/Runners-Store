

module.exports=(sequelize, dataTypes)=>{
    let alias='Sizes';
    let cols= {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowfull:false
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        size:{
            type: dataTypes.STRING,
        },
        size_description:{
            type: dataTypes.STRING,
        },

    };

    let config={
        tableName:'sizes',
        timestamps: false
    }
    const Size = sequelize.define(alias,cols,config);
    Size.associate =(models) =>{
        Size.belongsToMany(models.Products,{
            as:"product",
            through:"sizesprod",
            foreignKey:"sizes_id",
            otherKey:"prod_id",
            timestamps:false
        })
    }
    return Size;
}
