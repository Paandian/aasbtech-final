module.exports = (sequelize, Sequelize) => {
  const Casefile = sequelize.define("casefile", {
    fileStatus: {
      type: Sequelize.STRING,
    },
    createdBy: {
      type: Sequelize.STRING,
    },
    refType: {
      type: Sequelize.STRING,
    },
    // can be avoided by filtering from submited date
    // start
    year: {
      type: Sequelize.STRING,
    },
    // end

    branch: {
      type: Sequelize.STRING,
    },
    insurer: {
      type: Sequelize.STRING,
    },
    claimNo: {
      type: Sequelize.STRING,
    },
    vehicleNo: {
      type: Sequelize.STRING,
    },
    dateOfLoss: {
      type: Sequelize.DATEONLY,
    },
    placeOfLoss: {
      type: Sequelize.STRING,
    },
    insuredName: {
      type: Sequelize.STRING,
    },
    insComment: {
      type: Sequelize.STRING,
    },
    manRemark: {
      type: Sequelize.STRING,
    },
    dateOfInvestigation: {
      type: Sequelize.DATEONLY,
    },
    adjuster: {
      type: Sequelize.STRING,
    },
    dateSubmit: {
      type: Sequelize.DATEONLY,
    },
    collector: {
      type: Sequelize.STRING,
    },
    draftDate: {
      type: Sequelize.DATEONLY,
    },
    clerkInCharge: {
      type: Sequelize.STRING,
    },
    editingDate: {
      type: Sequelize.DATEONLY,
    },

    editor: {
      type: Sequelize.STRING,
    },
    dateOfPre: {
      type: Sequelize.DATEONLY,
    },
    dateFinalized: {
      type: Sequelize.DATEONLY,
    },
    despDate: {
      type: Sequelize.DATEONLY,
    },
    invNo: {
      type: Sequelize.STRING,
    },
    invAmount: {
      type: Sequelize.STRING,
    },
    transfer: {
      type: Sequelize.STRING,
    },
    transferDate: {
      type: Sequelize.DATEONLY,
    },
  });

  return Casefile;
};

// fileStatus
// Clerk = createdBy
// refType
// Year
// Branch
// Insurer
// claimNo
// vehicleNo
// dateOfLoss
// placeOfLoss
// insuredName
// insComment
// manRemark
// dateOfInvestigation
// adjuster
// dateSubmit
// collector
// draftDate
// clerkInCharge
// editingDate
// editor
// dateOfPre
// dateFinalized
// despDate
// invNo
// invAmount
// transfer
