var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  todo: String, // String is shorthand for {type: String}
  isDone: Boolean,
  user: { type: Schema.Types.ObjectId, ref: "User" }
});
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
