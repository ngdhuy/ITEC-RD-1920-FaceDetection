module.exports = app => {
  const face_image = require("../controllers/faceImage.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');
 
  var router = require("express").Router();

  // Create a new 
  router.post("/", [adminVerify],face_image.create);

  // Retrieve all 
  router.get("/", [adminVerify],face_image.findAll);

  // // Retrieve all published 
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", [adminVerify],face_image.findOne);

  // Update a  with id
  router.put("/:id", [adminVerify],face_image.update);

  // Delete a  with id
  router.delete("/:id", [adminVerify],face_image.delete);

  // Delete 
  router.delete("/",[adminVerify], face_image.deleteAll);

  app.use('/api/faceimage', router);
};
