var express = require("express");
var router = express.Router();
let Todo = require("../models/todo.model");
let User = require("../models/user.model");
const TodoController = require("../controllers/todo.controller");
//Get all
router.get("/", TodoController.all);
//Add New
router.post("/", TodoController.add);
//Get by id
router.get("/:id", TodoController.get);
//Delete by id
router.delete("/:id", TodoController.delete);
//Update by id
router.put("/:id", TodoController.update);

module.exports = router;
