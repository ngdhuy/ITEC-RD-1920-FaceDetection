
module.exports = (sequelize, Sequelize) => {
  const Attendance = sequelize.define("attendance", {
    attendance_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  ,status:{
    type:Sequelize.STRING,
  }
  ,date_check:
  {
    type:Sequelize.DATE,
  }
  
    ,student_of_course_id:{
    type:Sequelize.STRING,
    references: {
      // This is a reference to another model
      model: 'student_of_course_id',

      // This is the column name of the referenced model
      key: 'student_of_course_id'
  }}}
  ,
  { freezeTableName: true,
    timestamps: false
  });
return Attendance;
 
};