module.exports.all = async function(req, res, next) {
  let todos = await Todo.find().populate("user");
  return res.json(todos);
};

module.exports.add = async function(req, res, next) {
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
};

module.exports.get = async function(req, res, next) {
  let todo = await Todo.findById(req.params.id).populate("user");
  return res.json(todo);
};

module.exports.delete = async function(req, res, next) {
  let todo = await Todo.findByIdAndDelete(req.params.id);
  return res.json(todo);
};

module.exports.update = async function(req, res, next) {
  const { todo, isDone, user } = req.body;
  let updatetodo = await Todo.findByIdAndUpdate(req.params.id, {
    todo,
    isDone,
    user
  });
  return res.json(updatetodo);
};
