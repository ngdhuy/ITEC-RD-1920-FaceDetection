
module.exports = (sequelize, Sequelize) => {
  const FaceImage = sequelize.define("face_image", {
    face_image_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    face_image_url:{
      type:Sequelize.STRING
    }
  ,student_id:{
    type:Sequelize.STRING,
    references: {
      // This is a reference to another model
      model: 'student',

      // This is the column name of the referenced model
      key: 'student_id'
  }
  }
}
  ,{ freezeTableName: true,
    timestamps: false
  });
return FaceImage;
 
};