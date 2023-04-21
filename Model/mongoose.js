const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'Name can not be empty'],
        maxlength: [25, 'length of name can not be more than 25 characters.']
    },
    completed: {
        type: Boolean,
        default: false
    },
});


module.exports = mongoose.model('Task',TaskSchema);