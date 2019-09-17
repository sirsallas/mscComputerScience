var app = require('../../express');
var studentModel = require('../models/student/student.model.server');

app.get('/api/c2csms/student/:studentId', findStudentById);
app.put('/api/c2csms/student/:studentId', updateStudent);
app.delete('/api/c2csms/student/:studentId', deleteStudent);
app.post('/api/c2csms/student', createStudent);
app.get('/api/c2csms/student-list', findAllStudents);
app.get('/api/c2csms/students/user/:userId', findStudentsForUser);


function findAllStudents(req, res) {
    studentModel
        .findAllStudents()
        .then(function (students) {
            res.json(students);
        })
}

function findStudentById(req, res) {
    var studentId = req.params['studentId'];
    studentModel
        .findStudentById(studentId)
        .then(function (student) {
            res.json(student)
        });
}

function findStudentsForUser(req, res) {
    var userId = req.params['userId'];
    studentModel
        .findStudentsForUser(userId)
        .then(function (students) {
            res.json(students)
        })
}


function updateStudent(req, res) {
    var studentId = req.params['studentId'];
    var student = req.body;
    console.log(student); 
    studentModel
        .updateStudent(studentId, student)
        .then(function (response) {
            res.send(response)
        })
}

function deleteStudent(req, res) {
    var studentId = req.params['studentId'];
    studentModel
        .deleteStudent(studentId)
        .then(function (response) {
            res.send(response);
        })
}


function createStudent(req, res) {
    var student = req.body;
    console.log(student);
    studentModel
        .createStudent(student)
        .then(function (student) {
            res.json(student);
        })
}