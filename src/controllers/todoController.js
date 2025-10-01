const Todo = require('../models/todoModel');

//GET all todos
exports.getAllTodos =  async (req, res) => {
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

//GET single todo by ID
exports.getTodoById = async (req, res) =>{
    try {
        const todo = await Todo.findById(req.params.id);

        if(!todo){
            return res.status(404).json({
                succes : false,
                message : 'Todo not found'
            });
        }

        res.status(200).json({
            succes : true,
            data : todo
        });
        
    } catch (error) {

        res.status(500).json({
            succes : false,
            message : 'Server Error',
            error : error.message
        });
        
    }
};

