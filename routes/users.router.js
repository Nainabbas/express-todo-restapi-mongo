var express = require("express");
var router = express.Router();

const User = require("../models/user.model");
const UserController = require("../controllers/user.controller");
//Get all
router.get("/", UserController.all);
//Add New
router.post("/", UserController.add);
//Get by id
router.get("/:id", UserController.get);
//Delete by id
router.delete("/:id", UserController.delete);
//Update by id
router.put("/:id", UserController.update);

module.exports = router;
