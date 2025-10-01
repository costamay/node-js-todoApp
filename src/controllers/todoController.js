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

//CREATE new  todo
exports.createTodo = async (req, res) => {
    try {
        const {title, description, priority} = req.body;

        //validation
        if(!title){
            return res.status(400).json({
                success : false,
                message : 'Title is required'

            })
        }

        const todo = await Todo.create({
            title,
            description,
            priority
        });

        res.status(201).json({
            success : true,
            message : 'Todo created successfully',
            data: todo
        });
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Server Error',
            error : error.message
        })
    }
};

