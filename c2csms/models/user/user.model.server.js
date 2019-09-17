var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUsername = findUserByUsername;
userModel.updateUser = updateUser;
userModel.findAllUsers = findAllUsers;
userModel.deleteUser = deleteUser;
userModel.findUserByEmail = findUserByEmail;


module.exports = userModel;


function createUser(user) {
    return userModel.create(user)
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findUserByUsername(username) {
    return userModel.findOne({username: username});
}


function findUserByEmail(email) {
    return userModel.findOne({email:email});
}

function updateUser(userId, user) {
    return userModel.updateOne({_id: userId}, {
        $set:{
            firstName : user.firstName,
            lastName: user.lastName,
            dateOfBirth: user.dateOfBirth,
            email: user.email,
            password: user.password, 
            contact: user.contact,
            homeAddress: user.homeAddress,
            role:user.role
        }
    })
}

function findAllUsers() {
    return userModel.find();
}

function deleteUser(userId) {
    return userModel.deleteOne({_id: userId});
}