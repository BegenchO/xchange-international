const express = require("express");
const router = express.Router();

// Import controller methods
const {
  getMessage,
  getMessages,
  sendMessage,
} = require("../controllers/messageController");

router.route("/").get(getMessages);

router.route("/:userId").get(getMessage).post(sendMessage);

module.exports = router;
