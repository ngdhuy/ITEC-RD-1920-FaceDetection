module.exports = app => {
  const teacher = require("../controllers/teacher.controller.js");
  const checkAuth=require('../middleware/check-auth');
  const adminVerify=require('../middleware/admin-verify');

  var router = require("express").Router();

  // Create a new
  router.post("/", [adminVerify],teacher.create);

  // Retrieve all
  router.get("/", [adminVerify],teacher.findAll);

  // // Retrieve all published
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", [adminVerify],teacher.findOne);

  // Update a with id
  router.put("/:id", [adminVerify],teacher.update);

  // Delete a with id
  router.delete("/:id", [adminVerify],teacher.delete);

  // Create a new
  router.delete("/",[adminVerify], teacher.deleteAll);

  app.use('/api/teacher', router);
};
