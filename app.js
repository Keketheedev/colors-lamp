const express = require("express");
const app = express();

app.get("/api/colors", (req, res) => {
  res.json([
    { name: "red" },
    { name: "blue" }
  ]);
});

module.exports = app;