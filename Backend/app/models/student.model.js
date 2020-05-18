
const db = require(".");
const Class = db.class;
module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    student_id:{
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
  },class_id:{
    type:Sequelize.STRING,
    references: {
      // This is a reference to another model
      model: 'class',

      // This is the column name of the referenced model
      key: 'class_id'
  }
}
}
  ,{ freezeTableName: true,
    timestamps: false
  });
return Student;
 
};