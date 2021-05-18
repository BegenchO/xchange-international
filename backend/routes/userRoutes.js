const express = require("express");
const router = express.Router();

// Import Controller methods
const { registerUser, updateUser } = require("../controllers/userController");

router.route("/").post(registerUser).put(updateUser);

module.exports = router;
