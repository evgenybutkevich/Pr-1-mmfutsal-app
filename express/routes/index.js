const express = require("express");
const usersRoutes = require("./users");

const app = express();

app.use("/users", usersRoutes);

module.exports = app;