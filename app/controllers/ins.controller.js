const db = require("../models");
const Ins = db.inss;
const Op = db.Sequelize.Op;

// Create and Save a new Insurer
exports.create = (req, res) => {
  // Save Insurer to Database
  Ins.create({
    name: req.body.name,
    insCode: req.body.insCode,
  })
    .then(() => {
      res.send({ message: "Insurer was created successfully!" });
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all insurers from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Ins.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving insurers.",
      });
    });
};

// Find a single Insurer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Ins.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Insurer with id=" + id,
      });
    });
};

// Update a Insurer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Ins.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Insurer was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Insurer with id=${id}. Maybe Insurer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Insurer with id=" + id,
      });
    });
};

// Delete a Insurer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Ins.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Insurer was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Insurer with id=${id}. Maybe Insurer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Insurer with id=" + id,
      });
    });
};

// Delete all Insurers from the database.
exports.deleteAll = (req, res) => {
  Ins.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Insurers were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all insurers.",
      });
    });
};
