const User = require("../models/user.model");

module.exports.all = async function(req, res, next) {
  let users = await User.find().populate("todos");
  return res.json(users);
};

module.exports.add = async function(req, res, next) {
  const { name, email } = req.body;
  let user = new User({ name, email });
  user = await user.save();
  return res.json(user);
};

module.exports.get = async function(req, res, next) {
  let user = await User.findById(req.params.id).populate("todos");
  return res.json(user);
};

module.exports.delete = async function(req, res, next) {
  let user = await User.findByIdAndDelete(req.params.id);
  return res.json(user);
};

module.exports.update = async function(req, res, next) {
  const { name, email } = req.body;
  let user = await User.findByIdAndUpdate(req.params.id, {
    name,
    email
  });
  return res.json(user);
};
