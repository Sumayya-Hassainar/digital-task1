const express = require("express");

const {
  createLead,
  getLeads,
  updateStatus,
  deleteLead,
} = require("../controllers/leadControllers");

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeads);
router.patch("/:id", updateStatus);
router.delete("/:id", deleteLead);

module.exports = router;