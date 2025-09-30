const mongoose = require('mongoose');
//Define the structure of a Todo document

const todoSchema =  new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxlength: [100, "Title cannot exceed 100 characters"]
        },
        description: {
            type: String,
            trim: true,
            maxlength: [500, "Description cannot exceed 500 characters"]
        }
    }
);