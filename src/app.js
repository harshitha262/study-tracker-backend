const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/tasks", require("./routes/task.routes"));

app.get("/", (req, res) => {
  res.send("Study Tracker Backend is running");
});

module.exports = app;
