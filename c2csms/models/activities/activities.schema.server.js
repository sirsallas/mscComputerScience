const mongoose = require('mongoose');

var activitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    term: {
        type: String,
        default: '1',
        enum: ['1', '2', '3']
    }
    ,
    year: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.ObjectId,
        ref: 'StudentModel'
    }],
    instructor: {
        type: mongoose.Schema.ObjectId,
        ref: "UserModel"
    }
});

module.exports = activitiesSchema;
