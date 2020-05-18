const db = require("../models");
const TeaOfCourse = db.teaOfCourse;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.course_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a 
  const teaOfCourse = {
    teacher_of_course_id:req.body.teacher_of_course_id,
    teacher_id: req.body.teacher_id,
    course_id : req.body.course_id,
   
  };

  // Save in the database
  
  TeaOfCourse.create(teaOfCourse)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {
  const teacher_id = req.query.teacher_id;
  var condition = teacher_id ? { teacher_id: { [Op.teacher_id]: `%${teacher_id}%` } } : null;

  TeaOfCourse.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// // Find a single with an id
exports.findOne = (req, res,next) => {
  const id = req.params.id;

  TeaOfCourse.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// // Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TeaOfCourse.update(req.body, {
    where: { teacher_id:id} })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// // Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TeaOfCourse.destroy({
    where: { teacher_id: id } })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

// // Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  TeaOfCourse.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

