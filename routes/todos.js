var express = require("express");
var router = express.Router();
let Todo = require("../models/todo.model");
let User = require("../models/user.model");
//Get all
router.get("/", async function(req, res, next) {
  let todos = await Todo.find().populate("user");
  return res.json(todos);
});
//Add New
router.post("/", async function(req, res, next) {
  try {
    const { todo, user } = req.body;
    const isDone = req.body.isDone || false;
    let newtodo = new Todo({ todo, isDone, user });
    newtodo = await newtodo.save();
    let todoUser = await User.findById(newtodo.user);
    todoUser.todos.push(newtodo._id);
    todoUser = await todoUser.save();
    await todoUser.save();
    return res.json(newtodo);
  } catch (e) {
    res.send(e.message);
  }
});
//Get by id
router.get("/:id", async function(req, res, next) {
  let todo = await Todo.findById(req.params.id).populate("user");
  return res.json(todo);
});
//Delete by id
router.delete("/:id", async function(req, res, next) {
  let todo = await Todo.findByIdAndDelete(req.params.id);
  return res.json(todo);
});
//Update by id
router.put("/:id", async function(req, res, next) {
  const { todo, isDone, user } = req.body;
  let updatetodo = await Todo.findByIdAndUpdate(req.params.id, {
    todo,
    isDone,
    user
  });
  return res.json(updatetodo);
});

module.exports = router;
