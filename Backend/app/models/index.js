const dbConfig = require("../config/db.config.js");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
  
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.class = require("./class.model.js")(sequelize, Sequelize);

db.course = require("./course.model.js")(sequelize, Sequelize);

db.teacher = require("./teacher.model.js")(sequelize, Sequelize);

db.account = require("./account.model.js")(sequelize, Sequelize);

db.student = require("./student.model.js")(sequelize, Sequelize);

db.faceImage = require("./faceImage.model.js")(sequelize, Sequelize);

db.stuOfCourse = require("./stuOfCourse.model.js")(sequelize, Sequelize);

db.teaOfCourse = require("./teaOfCourse.model.js")(sequelize, Sequelize);

db.attendance = require("./attendance.model.js")(sequelize, Sequelize);


module.exports = db;
