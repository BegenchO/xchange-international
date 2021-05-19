const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
    maxlength: [500, "A single message cannot be more than 500 characters"],
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const CorrespondenceSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Message",
    },
  ],
});

module.exports = mongoose.model("Correspondence", CorrespondenceSchema);
