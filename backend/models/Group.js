const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: [50, "Group name cannot be more than 50 characters"],
  },
  description: {
    type: String,
    required: true,
    minlength: [50, "Group description cannot be fewer than 50 characters"],
    maxlength: [500, "Group description cannot be more than 500 characters"],
  },
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
  },
  members: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Group", GroupSchema);
