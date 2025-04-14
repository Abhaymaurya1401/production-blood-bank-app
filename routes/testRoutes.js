const express = require("express");
const { testController } = require("../controllers/testController");
const router = express.Router();

// Define your routes here
router.get("/", testController);

module.exports = router;