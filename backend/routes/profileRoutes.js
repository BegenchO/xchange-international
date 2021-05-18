const express = require("express");
const router = express.Router();

// Import Controller methods
const {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profileController");

router.route("/").get(getProfiles).post(createProfile);

router.route("/:profileId").get(getProfile).put(updateProfile);

module.exports = router;
