const express = require("express");
const router = express.Router();

// Import controller methods
const { loginUser } = require("../controllers/authController");

router.route("/").post(loginUser);

module.exports = router;
