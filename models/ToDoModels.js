import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({ 
    text: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    },
    time: {
        type: String,
        required:true
    }
})

const todoModel = mongoose.model("Todo", todoSchema)

export default todoModel;