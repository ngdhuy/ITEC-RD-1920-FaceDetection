module.exports = app => {
  const attendance = require("../controllers/attendance.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');
 
  var router = require("express").Router();

  // Create a new 
  router.post("/",[checkAuth], attendance.create);

  // Retrieve all 
  router.get("/",[checkAuth], attendance.findAll);

  // // Retrieve all published 
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single  with id
  router.get("/:id",[checkAuth], attendance.findOne);

  // Update a  with id
  router.put("/:id",[checkAuth], attendance.update);

  // Delete a  with id
  router.delete("/:id",[checkAuth], attendance.delete);

  // Delete
  router.delete("/",[checkAuth], attendance.deleteAll);

  app.use('/api/attendance', router);
};
