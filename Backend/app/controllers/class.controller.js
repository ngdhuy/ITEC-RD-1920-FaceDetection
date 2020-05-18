const db = require("../models");
const Class = db.class;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.class_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const class_room = {
    class_id:req.body.class_id,
    class_name: req.body.class_name,
    total: req.body.total,
  };

  // Save Tutorial in the database
  Class.create(class_room)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const class_name = req.query.class_name;
  var condition = class_name ? { class_name: { [Op.class_name]: `%${class_name}%` } } : null;

  Class.findAll({ where: condition })
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

// Find a single Tutorial with an id
exports.findOne = (req, res,next) => {
  const id = req.params.id;

  Class.findByPk(id)
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

  Class.update(req.body, {
    where: { class_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "was updated successfully."
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

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Class.destroy({
    where: { class_id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " deleted successfully!"
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
  Class.destroy({
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

// find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Class.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };
