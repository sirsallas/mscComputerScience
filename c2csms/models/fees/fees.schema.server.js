const mongoose = require('mongoose');

var feesSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    amountPaid: {
        type: String,
    },
    datePaid: {
        type: Date,
    },
    student: {
        type: mongoose.Schema.ObjectId,
        ref: "StudentModel"
    }
});

module.exports = feesSchema;
