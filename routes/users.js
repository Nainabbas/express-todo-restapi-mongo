var express = require("express");
var router = express.Router();

let User = require("../models/user.model");
//Get all
router.get("/", async function(req, res, next) {
  let users = await User.find().populate("todos");
  return res.json(users);
});
//Add New
router.post("/", async function(req, res, next) {
  const { name, email } = req.body;
  let user = new User({ name, email });
  user = await user.save();
  return res.json(user);
});
//Get by id
router.get("/:id", async function(req, res, next) {
  let user = await User.findById(req.params.id).populate("todos");
  return res.json(user);
});
//Delete by id
router.delete("/:id", async function(req, res, next) {
  let user = await User.findByIdAndDelete(req.params.id);
  return res.json(user);
});
//Update by id
router.put("/:id", async function(req, res, next) {
  const { name, email } = req.body;
  let user = await User.findByIdAndUpdate(req.params.id, {
    name,
    email
  });
  return res.json(user);
});

module.exports = router;
