var mongoose = require('mongoose');
var studentSchema = require('./student.schema.server');
var studentModel = mongoose.model('StudentModel', studentSchema);

studentModel.createStudent = createStudent;
studentModel.findStudentById = findstudentById;
studentModel.updateStudent = updateStudent;
studentModel.findAllStudents = findAllStudents;
studentModel.deleteStudent = deleteStudent;
studentModel.findStudentsForUser = findStudentsForUser;


module.exports = studentModel;


function createStudent(student) {
    return studentModel.create(student)
}

function findstudentById(studentId) {
    return studentModel.findById(studentId);
}

function findstudentByFirstname(firstname) {
    return studentModel.findOne({firstName: firstName});
}
function findstudentByLastname(lastname) {
    return studentModel.findOne({lastName: lastName});
}

function findStudentsForUser(userId) {
    return studentModel.find({
        $or: [
            {primaryGuardian: userId},
            {secondaryGuardian: userId}]
    })
}

function updateStudent(studentId, student) {
    return studentModel.updateOne({_id: studentId}, { //_id:
        $set: {
            firstName: student.firstName,
            lastName: student.lastName,
            placeOfBirth: student.placeOfBirth,
            homeAddress: student.homeAddress,
            allergies: student.allergies,
            primaryGuardian: student.primaryGuardian,
            secondaryGuardian: student.secondaryGuardian,
            fees: student.fees
        }
    })
}

function findAllStudents() {
    return studentModel.find();
}

function deleteStudent(studentId) {
    return studentModel.deleteOne({_id: studentId});
}