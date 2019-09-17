const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,

    },
    homeAddress: {
        type: String,

    },
    placeOfBirth: {
        type: String,

    },
    nationality: {
        type: String,

    },
    allergies: [{
        type: String
    }],
    primaryGuardian: {
        type: mongoose.Schema.ObjectId,
        ref: "UserModel"
    },
    secondaryGuardian: {
        type: mongoose.Schema.ObjectId,
        ref: "UserModel"
    },
    performances: [{
        type: mongoose.Schema.ObjectId,
        ref: 'PerformanceModel'
    }],
    fees: {
        type: mongoose.Schema.ObjectId,
        ref: "FeesModel"
    }
});

module.exports = studentSchema;