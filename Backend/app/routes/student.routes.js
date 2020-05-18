module.exports = app => {
  const student = require("../controllers/student.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');

  var router = require("express").Router();

  // Create a new 
  router.post("/",[checkAuth], student.create);

  // Retrieve all 
  router.get("/",[checkAuth], student.findAll);

  // // Retrieve all published 
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single  with id
  router.get("/:id", [checkAuth],student.findOne);

  // Update a  with id
  router.put("/:id",[adminVerify], student.update);

  // Delete a  with id
  router.delete("/:id",[adminVerify], student.delete);

  // Delete a new 
  router.delete("/",[adminVerify], student.deleteAll);

  app.use('/api/student', router);
};
