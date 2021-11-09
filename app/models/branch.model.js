module.exports = (sequelize, Sequelize) => {
    const Branch = sequelize.define("branch", {
      name: {
        type: Sequelize.STRING
      },
      brCode: {
        type: Sequelize.STRING
      },
    });
  
    return Branch;
  };
  