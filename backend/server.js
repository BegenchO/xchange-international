const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Import routes
const users = require("./routes/userRoutes");

// Load env variables
dotenv.config();

const app = express();

// Dev logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routes
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
