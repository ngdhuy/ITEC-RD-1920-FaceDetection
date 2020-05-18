
module.exports = (sequelize, Sequelize) => {
  const StuOfCourse = sequelize.define("student_of_course", {
    student_of_course_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  ,student_id:{
    type:Sequelize.STRING,
    references: {
      // This is a reference to another model
      model: 'student',

      // This is the column name of the referenced model
      key: 'student_id'
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
return StuOfCourse;
 
};