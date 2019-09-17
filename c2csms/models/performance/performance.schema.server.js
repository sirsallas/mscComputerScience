const mongoose = require('mongoose');

var performanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.ObjectId,
        ref: "StudentModel"
    },
    activity: {
        type: mongoose.Schema.ObjectId,
        ref: "ActivitiesModel"
    },
    grade: {
        type: String,
        default: 'NULL',
        enum: ['EXCELLENT', 'VERY GOOD', 'GOOD', 'NULL']
    },
    attendance: {
        type: Number
    }
});

module.exports = performanceSchema;
