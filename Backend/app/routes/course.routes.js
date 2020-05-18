module.exports = app => {
  const course = require("../controllers/course.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');

  var router = require("express").Router();

  // Create a new 
  router.post("/",[adminVerify], course.create);

  // Retrieve all 
  router.get("/", [adminVerify],course.findAll);

  // // Retrieve all published 
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single  with id
  router.get("/:id",[adminVerify], course.findOne);

  // Update a with id
  router.put("/:id",[adminVerify], course.update);

  // Delete a with id
  router.delete("/:id",[adminVerify], course.delete);

  // Create a new 
  router.delete("/",[adminVerify], course.deleteAll);

  app.use('/api/course', router);
};
