var express = require("express");
var router = express.Router();
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
