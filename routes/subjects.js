const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all subjects" });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new subject" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update subject ${req.params.id}` });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Get subject ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete subject ${req.params.id}` });
});

module.exports = router;
