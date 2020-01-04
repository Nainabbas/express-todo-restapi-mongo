const express = require("express");
const router = express.Router();

const usersRouter = require("./users.router");
const todosRouter = require("./todos.router");

router.use("/users", usersRouter);
router.use("/todos", todosRouter);

module.exports = router;
