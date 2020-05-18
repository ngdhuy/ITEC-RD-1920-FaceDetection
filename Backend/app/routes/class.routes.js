module.exports = app => {
  const class_room = require("../controllers/class.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');

  var router = require("express").Router();

  // Create a new 
  router.post("/",[adminVerify], class_room.create);

  // Retrieve all 
  router.get("/",[adminVerify], class_room.findAll);

  // // Retrieve all published 
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single  with id
  router.get("/:id",[adminVerify], class_room.findOne);

  // Update a  with id
  router.put("/:id",[adminVerify], class_room.update);

  // Delete a  with id
  router.delete("/:id",[adminVerify], class_room.delete);

  //Delete
  router.delete("/",[adminVerify], class_room.deleteAll);

  app.use('/api/class', router);
};
