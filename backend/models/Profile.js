const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  dateOfBirth: {
    type: Date,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  funding: {
    type: String,
  },
  school: {
    degree: {
      type: String,
      enum: ["Bachelor's", "Master's", "PhD", "Other"],
    },
    major: {
      type: String,
    },
    school: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
