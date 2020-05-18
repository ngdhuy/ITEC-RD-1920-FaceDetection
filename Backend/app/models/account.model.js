const bcrypt=require('bcrypt')
module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    account_id:{
      type:Sequelize.INTEGER,
      autoIncrement: true,
      // allowNull: false,
      primaryKey: true
    },
    username:{
      type:Sequelize.STRING
    }
  ,password:{
    type:Sequelize.STRING
  } 
  ,teacher_id:{
    type:Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: 'teacher',

      // This is the column name of the referenced model
      key: 'teacher_id'
  }
  }
  ,account_type:{
    type:Sequelize.STRING
  }
}
  ,{ freezeTableName: true,
    timestamps: false,
    instanceMethods: {
      generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
          return bcrypt.compare(password, this.password);
      }
  }
  });
return Account;
 
};