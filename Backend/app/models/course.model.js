
module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("course", {
    course_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    course_name:{
      type:Sequelize.STRING
    }
  ,course_start_date:{
    type:Sequelize.DATE
  } 
  ,course_end_date:{
    type:Sequelize.DATE
  }
}
  ,{ freezeTableName: true,
    timestamps: false
  });
return Course;
 
};