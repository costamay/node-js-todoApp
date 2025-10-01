const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController')

//Define routes and connect to controller functions
router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);
router.patch('/:id/toggle', todoController.toggleTodoComplete);

module.exports = router;
