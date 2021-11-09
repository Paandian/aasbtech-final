module.exports = (sequelize, Sequelize) => {
  const Ins = sequelize.define("ins", {
    name: {
      type: Sequelize.STRING,
    },
    insCode: {
      type: Sequelize.STRING,
    },
  });

  return Ins;
};
