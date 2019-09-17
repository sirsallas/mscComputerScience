var app = require('../../express');
var feesModel = require('../models/fees/fees.model.server');

app.get('/api/c2csms/fees/:feesId', findFeesById);
app.put('/api/c2csms/fees/:feesId', updateFees);
app.delete('/api/c2csms/fees/:feesId', deleteFees);
app.post('/api/c2csms/fees', createFees);
app.get('/api/c2csms/fees-list', findAllFees);
app.get('/api/c2csms/fees/student/:studentId', findFeesForStudent);


function findAllFees(req, res) {
    feesModel
        .findAllFees()
        .then(function (fees) {
            res.json(fees);
        })
}

function findFeesById(req, res) {
    var feesId = req.params['feesId'];
    feesModel
        .findFeesById(feesId)
        .then(function (fees) {
            res.json(fees)
        });
}

function updateFees(req, res) {
    var feesId = req.params['feesId'];
    var fees = req.body;
    feesModel
        .updateFees(feesId, fees)
        .then(function (response) {
            res.send(response)
        })
}

function deleteFees(req, res) {
    var feesId = req.params['feesId'];
    feesModel
        .deleteFees(feesId)
        .then(function (response) {
            res.send(response);
        })
}


function createFees(req, res) {
    var fees = req.body;
   // fees._user = req.user._id;
    feesModel
        .createFees(fees)
        .then(function (fees) {
            res.json(fees);
        })
}

function findFeesForStudent(req, res) {
    var studentId = req.params['studentId'];
    feesModel
        .findFeesForStudent(studentId)
        .then(function (fees) {
            res.json(fees);
        })
}