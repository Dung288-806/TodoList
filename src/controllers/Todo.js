const Todo = require("../models/ToDo");

const add = (req, res) => {
  const todo = new Todo(req.body)
  todo.save()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(500).json(e + " ");
    });
};

const getAll = async (req, res) => {
    try {
    const { completed } = req.query;
    let items = null;
    if (completed === undefined) {
        items = await Todo.find();
    } else {
      const params = completed == "true" ? true : false;
      items = await Todo.find({ completed: params });
    }
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json(e + " ");
  }
};

const deleteTodo = async (req, res) => {
  try {
    const itemDel = await Todo.deleteOne({_id: req.params.id});
    res.status(200).json(itemDel);
  } catch (e) {
    res.status(500).json(e + " ");
  }
};

const completedHandle = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate({ _id: req.params.id },{completed: true}, {new: true});
    res.status(200).json(updated);
  } catch (e) {
    res.status(500).json(e + " ");
  }
};

module.exports = {
  add,
  getAll,
  deleteTodo,
  completedHandle,
};
