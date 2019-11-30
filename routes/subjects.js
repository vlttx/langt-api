const express = require("express");
const {
  getSubject,
  getSubjects,
  createSubject,
  updateSubject,
  deleteSubject
} = require("../controllers/subjects");
const router = express.Router();

router
  .route("/")
  .get(getSubjects)
  .post(createSubject);

router
  .route("/:id")
  .get(getSubject)
  .put(updateSubject)
  .delete(deleteSubject);

module.exports = router;
