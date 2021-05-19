const express = require("express");
const router = express.Router();

// Import controller methods
const {
  getGroup,
  getGroups,
  createGroup,
  updateGroup,
  joinGroup,
} = require("../controllers/groupController");

router.route("/").get(getGroups).post(createGroup);

router.route("/:groupId").get(getGroup).put(updateGroup);

router.route("/:groupId/join").put(joinGroup);

module.exports = router;
