
const mongoose = require("mongoose");
const URL = process.env.CONNECT_DB || "mongodb://127.0.0.1:27017/TodoList";

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});


