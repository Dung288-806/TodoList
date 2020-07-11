const express = require("express");
const todoControl = require('../controllers/Todo')
const Router = express.Router();

Router.post("/add", todoControl.add);
Router.get("/all", todoControl.getAll);
Router.delete("/del/:id", todoControl.deleteTodo);
Router.put("/completed/:id", todoControl.completedHandle);

module.exports = Router