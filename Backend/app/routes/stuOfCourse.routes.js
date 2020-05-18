module.exports = app => {
  const stuOfCourse = require("../controllers/stuOfCourse.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');

  var router = require("express").Router();

  // Create a new 
  router.post("/",[adminVerify], stuOfCourse.create);

  // Retrieve all 
  router.get("/",[adminVerify], stuOfCourse.findAll);

  // // Retrieve all published 
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single  with id
  router.get("/:id",[adminVerify], stuOfCourse.findOne);

  // Update a with id
  router.put("/:id",[adminVerify], stuOfCourse.update);

  // Delete a with id
  router.delete("/:id", [adminVerify],stuOfCourse.delete);

  // Delete a new 
  router.delete("/",[adminVerify], stuOfCourse.deleteAll);

  app.use('/api/studentofcourse', router);
};
