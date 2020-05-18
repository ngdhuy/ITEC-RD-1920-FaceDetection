const db = require("../models");
const Course = db.course;
const Op = db.Sequelize.Op;
const checkAuth=require('../middleware/check-auth');
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.course_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a 
  const course = {
    course_id:req.body.course_id,
    course_name: req.body.course_name,
    course_start_date: req.body.course_start_date,
    course_end_date : req.body.course_end_date
  };

  // Save in the database
  
  Course.create(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the."
      });
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const course_name = req.query.course_name;
  var condition = course_name ? { course_name: { [Op.course_name]: `%${course_name}%` } } : null;

  Course.findAll({ where: condition })
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

// Find a single with an id
exports.findOne = (req, res,next) => {
  const id = req.params.id;

  Course.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Course.update(req.body, {
    where: { course_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating  with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Course.destroy({
    where: { course_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete with id=${id}. Maybe was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Course.destroy({
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

