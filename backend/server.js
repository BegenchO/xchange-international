const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

// Import routes
const auth = require("./routes/authRoutes");
const groups = require("./routes/groupRoutes");
const messages = require("./routes/messageRoutes");
const posts = require("./routes/postRoutes");
const profiles = require("./routes/profileRoutes");
const users = require("./routes/userRoutes");

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Dev logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routes
app.use("/api/auth", auth);
app.use("/api/groups", groups);
app.use("/api/messages", messages);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);
app.use("/api/users", users);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  // Close server & exit process
  server.close(() => process.exit(1));
});
