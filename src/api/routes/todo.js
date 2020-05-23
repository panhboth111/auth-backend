const Todo = require("../../models/Todo");
module.exports = (router) => {
  router.get("/todo", async (req, res) => {
    try {
      const todos = await Todo.find();
      return res.json({
        success: true,
        msg: "Todo retrieved successfully",
        data: todos,
      });
    } catch (error) {
      console.log(error.message);
      return res.json({ success: false, msg: error.message, data: null });
    }
  });
  router.post("/todo", async (req, res) => {
    try {
      const { name, description } = req.body;
      const todoExists = await Todo.findOne({ name });
      if (todoExists) {
        return res.json({
          success: false,
          msg: "todo already created",
          data: null,
        });
      }
      const newTodo = new Todo({ name, description });
      const savedTodo = await newTodo.save();
      console.log(savedTodo);
      return res.json({
        success: true,
        msg: "Todo added successfully",
        data: savedTodo,
      });
    } catch (error) {
      return res.json({ success: false, msg: error.message, data: null });
    }
  });
  router.delete("/todo", async (req, res) => {});
};
