var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var todosRouter = require("./routes/todos");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todos", todosRouter);

//________DB Connect____________
const uri = process.env.DB_URI;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
//________DB Connect____________

module.exports = app;
