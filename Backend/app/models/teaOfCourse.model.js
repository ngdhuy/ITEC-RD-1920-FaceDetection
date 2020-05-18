
module.exports = (sequelize, Sequelize) => {
  const TeaOfCourse = sequelize.define("teacher_of_course", {
    teacher_of_course_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  ,teacher_id:{
    type:Sequelize.STRING,
    references: {
      // This is a reference to another model
      model: 'teacher',

      // This is the column name of the referenced model
      key: 'teacher_id'
  },coure_id:{
    type:Sequelize.STRING,
    references: {
      // This is a reference to another model
      model: 'course',

      // This is the column name of the referenced model
      key: 'course_id'
  }}}}
  ,
  { freezeTableName: true,
    timestamps: false
  });
return TeaOfCourse;
 
};