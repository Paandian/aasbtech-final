const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.branches = require("../models/branch.model.js")(sequelize, Sequelize);
db.inss = require("../models/ins.model.js")(sequelize, Sequelize);
db.depts = require("../models/dept.model.js")(sequelize, Sequelize);
db.stages = require("../models/stage.model.js")(sequelize, Sequelize);
db.casefiles = require("../models/casefile.model.js")(sequelize, Sequelize);
db.userRoles = require("../models/userRole.model.js")(sequelize, Sequelize);
db.bulletin = require("./bulletin.model.js")(sequelize, Sequelize);

db.refreshToken = require("../models/refreshToken.model.js")(
  sequelize,
  Sequelize
);

db.role.belongsToMany(db.user, {
  as: "staff",
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.role, {
  as: "roles",
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.refreshToken.belongsTo(db.user, {
  foreignKey: "userId",
  targetKey: "id",
});
db.user.hasOne(db.refreshToken, {
  foreignKey: "userId",
  targetKey: "id",
});

// db.ROLES = ["user", "admin", "moderator"];
db.ROLES = [
  "admin",
  "manager",
  "branchmanager",
  "clerk",
  "branchclerk",
  "adjuster",
  "editor",
  "director",
  "staff",
];

module.exports = db;
