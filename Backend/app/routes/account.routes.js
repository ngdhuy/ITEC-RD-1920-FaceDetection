module.exports = app => {
  const account = require("../controllers/account.controller.js");
  const signupVerify=require('../middleware/signup-verify');
  const checkAuth=require('../middleware/check-auth');
  var router = require("express").Router();
  const adminVerify=require('../middleware/admin-verify');
  
  // Create a new account
  router.post("/signup", signupVerify,account.create);

  router.post("/login", account.login);

  // Retrieve all account
  router.get("/",adminVerify, account.findAll);

  // // Retrieve all published account
  // router.get("/published", class_room.findAllPublished);

  // Retrieve a single account with id
  router.get("/:id",adminVerify,account.findOne);

  // Update a account with id
  router.put("/:id",adminVerify, account.update);

  // Delete a account with id
  router.delete("/:id", adminVerify,account.delete);

  // Create a new account
  router.delete("/",adminVerify, account.deleteAll);

  app.use('/api/account', router);
};
