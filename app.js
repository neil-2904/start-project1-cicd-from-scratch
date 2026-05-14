const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Project 1: CI/CD from scratch ✅");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;