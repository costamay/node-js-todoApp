require('dotenv').config();

const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/database');
const todoRoutes = require('./src/routes/todoRoutes');
const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('./src/controllers/todoController');

const app = express()
const PORT = process.env.PORT || 5000

//Connect to Database
connectDB()

//Middlewares
app.use(cors()); //Enable CORS
app.use(express.json()); //Parse JSON request bodies
app.use(express.urlencoded({ extended : true})); //Parse URL-encoded bodies

//Routes
app.use('/api/todos', todoRoutes)

//Home route
app.get('/', (req, res) =>{
    res.json({
        message: 'Welcome to Todo API',
        version: '1.0.0',
        endpoints: {
            getAllTodos: 'GET /api/todos',
            getTodoById: 'GET /api/todos/:id',
            createTodo: 'POST /api/todos',
            updateTodo: 'PATCH /api/todos/:id',
            deleteTodo: 'DELETE /api/todos/:id',
            toggleComplete: 'PATCH /api/todos/:id/toggle'
        }
    });
});

//Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});