module.exports = (app) => {
  const { verifySignUp } = require("../middleware");
  const members = require("../controllers/member.controller");

  var router = require("express").Router();

  // Create a new Member
  router.post(
    "/",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    members.create
  );

  // Retrieve all Member
  router.get("/", members.findAll);

  // Retrieve all active Member
  router.get("/active", members.findAllActiveMember);

  // Retrieve a single Member with id
  router.get("/:id", members.findOneMember);

  // Update a Member with id
  router.put("/:id", members.updateMember);

  // Delete a Member with id
  router.delete("/:id", members.deleteMember);

  // Delete all Member
  // router.delete("/", members.deleteAllMember);

  // Retrieve all Members (include Roles)
  router.get("/userLevel/all", members.findAllRoles);

  app.use("/api/members", router);
};
