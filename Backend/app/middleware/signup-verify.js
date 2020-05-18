

const db = require("../models");
const Account = db.account;
const Op = db.Sequelize.Op;

module.exports= (req, res, next) => {
  // -> Check Username is already in use
  Account.findOne({
    where: {
      username: req.body.username
    } 
  }).then(user => {
    if(user){
      res.status(400).send("Fail -> Username is already taken!");
      return;

    }
        
    next();
  });

}



  
