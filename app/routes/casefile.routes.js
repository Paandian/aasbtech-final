module.exports = (app) => {
  const casefiles = require("../controllers/casefile.controller");

  var router = require("express").Router();

  // Create a new casefile
  router.post("/", casefiles.create);

  // Retrieve all casefiles
  router.get("/", casefiles.findAll);

  // Retrieve a single casefile with id
  router.get("/:id", casefiles.findOne);

  // Update a casefile with id
  router.put("/:id", casefiles.update);

  // Delete a casefile with id
  router.delete("/:id", casefiles.delete);

  // Delete all casefiles
  router.delete("/", casefiles.deleteAll);

  app.use("/api/casefiles", router);
};
