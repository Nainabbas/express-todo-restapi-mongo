var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }]
});
const User = mongoose.model("User", userSchema);

module.exports = User;
