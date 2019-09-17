const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
     //   required: true
    },
    email: {
        type: String,
     //   required: true
    },
    password: {
        type: String,
     //   required: true
    },
    homeAddress: {
        type: String,
      //  required: true
    },
    contact: {
        type: String,
       // required: true
    },
    role: {type: String, default: 'GUARDIAN', enum: ['ADMIN','GUARDIAN','INSTRUCTOR']}
});

module.exports = userSchema;