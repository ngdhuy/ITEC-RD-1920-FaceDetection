const db = require("../models");
const Account = db.account;
const Op = db.Sequelize.Op;
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a 
  const account = {
    account_id:req.body.account_id,
    username: req.body.username,
    //password:(bcrypt.hash(req.body.password, bcrypt.genSaltSync(8))),
    password:req.body.password,
    teacher_id : req.body.teacher_id,
    account_type: req.body.account_type
  };

  // Save in the database
  
  Account.create(account)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating ."
      });
    });
};
exports.login = (req, res,next) => {
 //Account.findOne({username:req.body.username})
  // const username=req.body.username;
  // const password = req.body.password;
  // var condition = password ? { password: { [Op.password]: `%${password}%` } } : null;
  // var condition2 = username ? { username: { [Op.username]: `%${username}%` } } : null;
  
  // Account.findOne({ where:
  //   {
  //     username:req.body.username
      
  //     , 
  //      password:req.body.password
  //     }
  //     }
  //   )
  //   .then(data => {

  //     if(data.username<1){
  //       return res.status(401).json({
  //         massage:'Username not exist'
  //       });
  //     }
  //     if(data.password<1){
  //       return res.status(401).json({
  //         massage:'Password wrong'
  //       });
  //     }
  Account.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "User Not found." });
      }


       if( req.body.password===data.password)
        {
          const token=jwt.sign({
            account_id:data.account_id,
            username:data.username,
            password:data.password,
            role: data.account_type
            },'secret_key',{
              expiresIn:"1h"
            }
          );
          res.status(200).json({
            massage:'Auth successful',
            token:token
          });
          return;
        }
       else
          return res.status(401).json({
            massage: 'Invalid Password!'
          });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ."
      });
    });
 
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.username]: `%${username}%` } } : null;

  Account.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ."
      });
    });
};

// // Find a single with an id
exports.findOne = (req, res,next) => {
  const id = req.params.id;

  Account.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving with id=" + id
      });
    });
};

// // Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Account.update(req.body, {
    where: { account_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating with id=" + id
      });
    });
};

// // Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Account.destroy({
    where: { account_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}. Maybe was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete  with id=" + id
      });
    });
};

// // Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Account.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums}  were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ."
      });
    });
};

