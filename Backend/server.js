const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json


// parse requests of content-type - application/x-www-form-urlencoded

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to rnd" });
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./app/routes/class.routes")(app);
require("./app/routes/course.routes")(app);
require("./app/routes/teacher.routes")(app);
require("./app/routes/account.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/faceImage.routes")(app);
require("./app/routes/stuOfCourse.routes")(app);
require("./app/routes/teaOfCourse.routes")(app);
require("./app/routes/attendance.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
