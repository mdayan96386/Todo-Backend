const express = require("express");
const connectDB = require("./config/db_config");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB Connection
connectDB();

//Body-parse
app.use(express.json());
app.use(express.urlencoded({extened: true}));

app.get("/", (req, res) => {
  res.send({
    msg: "WELCOME TO CRUD API 1.2",
  });
});

// Todo Routes
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT : ${PORT}`));

// Routes
//  GET : /api/todo : All Todos
//  POST : /api/todo :  Todo Added
//  GET : /api/todo/:id : Single Todo
//  PUT : /api/todo/:id : Update Todo
//  DELETE : /api/todo/:id : Delete Todo
