const todo = require('../models/todoModel');

//GET all todos
exports.getAllTodos =  async () => {
    try{
        const todos = await Todo.find().sort({createdAt: -1}); //Newest first
        res.status(200).json({
            success : true,
            count : todos.length,
            data: todos
        })

    }catch(error){
        res.status(500).json({
            success : false,
            message : 'Server Error',
            error : error.message
        })

    }
};