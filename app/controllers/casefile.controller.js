const db = require("../models");
const Casefile = db.casefiles;
const Op = db.Sequelize.Op;

// Create and Save a new Casefile
exports.create = (req, res) => {
  // Save Casefile to Database
  Casefile.create({
    fileStatus: req.body.fileStatus,
    createdBy: req.body.createdBy,
    refType: req.body.refType,
    year: req.body.year,
    branch: req.body.branch,
    insurer: req.body.insurer,
    claimNo: req.body.claimNo,
    vehicleNo: req.body.vehicleNo,
    dateOfLoss: req.body.dateOfLoss,
    placeOfLoss: req.body.placeOfLoss,
    insuredName: req.body.insuredName,
    insComment: req.body.insComment,
    manRemark: req.body.manRemark,
    dateOfInvestigation: req.body.dateOfInvestigation,
    adjuster: req.body.adjuster,
    dateSubmit: req.body.dateSubmit,
    collector: req.body.collector,
    draftDate: req.body.draftDate,
    clerkInCharge: req.body.clerkInCharge,
    editingDate: req.body.editingDate,
    editor: req.body.editor,
    dateOfPre: req.body.dateOfPre,
    dateFinalized: req.body.dateFinalized,
    despDate: req.body.despDate,
    invNo: req.body.invNo,
    invAmount: req.body.invAmount,
    transfer: req.body.transfer,
    transferDate: req.body.transferDate,
  })
    .then(() => {
      res.send({ message: "Casefile was created successfully!" });
    })

    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all Casefiles from the database.
exports.findAll = (req, res) => {
  const insuredName = req.query.insuredName;
  var condition = insuredName
    ? { insuredName: { [Op.like]: `%${insuredName}%` } }
    : null;

  Casefile.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Casefiles.",
      });
    });
};

// Find a single Casefile with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Casefile.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Casefile with id=" + id,
      });
    });
};

// Update a Casefile by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Casefile.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Casefile was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Casefile with id=${id}. Maybe Casefile was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Casefile with id=" + id,
      });
    });
};

// Delete a Casefile with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Casefile.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Casefile was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Casefile with id=${id}. Maybe Casefile was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Casefile with id=" + id,
      });
    });
};

// Delete all Casefiles from the database.
exports.deleteAll = (req, res) => {
  Casefile.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Casefiles were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Casefiles.",
      });
    });
};
