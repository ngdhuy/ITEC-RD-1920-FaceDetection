
module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {
    teacher_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name:{
      type:Sequelize.STRING
    }
  ,email:{
    type:Sequelize.STRING
  } 
  ,phone:{
    type:Sequelize.INTEGER
  }
  ,gender:{
    type:Sequelize.STRING
  }
}
  ,{ freezeTableName: true,
    timestamps: false
  });
return Teacher;
 
};