module.exports= (sequelize, dataTypes) => {

  let alias='UserImage';
  let cols= {
    id:{
    type: dataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "user_images",
    timestamps: false,
  };

  const UserImage  = sequelize.define(alias,cols,config);
    
  UserImage.associate = (models) => {
    // Users
    UserImage.hasMany(models.Users, {
      as: "users",
      foreignKey: "image_id",
    });
  };

  return UserImage;
};