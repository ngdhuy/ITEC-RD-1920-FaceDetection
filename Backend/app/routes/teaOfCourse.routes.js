module.exports = app => {
  const teaOfCourse = require("../controllers/teaOfCourse.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');
 
  var router = require("express").Router();

  // Create a new
  router.post("/", [adminVerify],teaOfCourse.create);

  // Retrieve all
  router.get("/", [adminVerify],teaOfCourse.findAll);

  // // Retrieve all published
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", [adminVerify],teaOfCourse.findOne);

  // Update a with id
  router.put("/:id",[adminVerify] ,teaOfCourse.update);

  // Delete a with id
  router.delete("/:id",[adminVerify], teaOfCourse.delete);

  // Delete a new 
  router.delete("/", [adminVerify],teaOfCourse.deleteAll);

  app.use('/api/teacherofcourse', router);
};
