const express = require("express");
const { createTour, listTours } = require("../controllers/tourController");

const router = express.Router();

router.post("/", createTour);
router.get("/", listTours);

module.exports = router;
