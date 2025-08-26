const Todo = require("../models/todoModel");

const getTodos = async (req, res) => {
  // DB QUERY TO FIND All
  const todos = await Todo.find();

  if (!todos) {
    res.status(404);
    res.json({
      msg: "No Todos Found",
    });
  }

  res.status(200);
  res.json(todos);
};

const getTodo = async (req, res) => {
  // DB QUERY TO FIND DOC USING ID
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    res.json({
      msg: "No Todo Found",
    });
  }

  res.status(200);
  res.json(todo);
};

const addTodo = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    res.json({
      msg: "Please Fill All Details",
    });
  }

  // DB QUERY TO CREATE A DOC IN DB
  const todo = await Todo.create({ title, description });

  if (!todo) {
    res.status(400);
    res.json({
      msg: "Todo Not Created",
    });
  }

  res.status(201);
  res.json(todo);
};

const updateTodo = async (req, res) => {
  // DB QUERY FOR UPDATE DOCUMENT BY ID
  const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  
  if (!updateTodo) {
    res.status(400);
    res.json({
      msg: "Todo Not Updated",
    });
  }

  res.status(200);
  res.json(updateTodo);
};

const removeTodo = async (req, res) => {
  // DB QUERY FOR DELETE DOCUMENT BY ID
  await Todo.findByIdAndDelete(req.params.id);

  res.status(200).json({
    msg: "Todo Deleted",
  });
};

module.exports = { getTodos, addTodo, getTodo, updateTodo, removeTodo };
