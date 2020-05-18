
module.exports = (sequelize, Sequelize) => {
  const Class = sequelize.define("class", {
    class_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    total:{
      type:Sequelize.INTEGER
    },
    class_name:{
      type:Sequelize.STRING
    }
  },{ freezeTableName: true,
    timestamps: false
  });
return Class;
 
};