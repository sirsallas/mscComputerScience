var app = require('../../express');
var performanceModel = require('../models/performance/performance.model.server');

app.get('/api/c2csms/performance/:performanceId', findPerformanceById);
app.put('/api/c2csms/performance/:performanceId', updatePerformance);
app.delete('/api/c2csms/performance/:performanceId', deletePerformance);
app.post('/api/c2csms/performance', createPerformance);
app.get('/api/c2csms/performance-list', findAllperformances);

app.get('/api/c2csms/performances/student/:studentId', findPerformancesForStudent);
app.get('/api/c2csms/performance/activity/:activityId', findPerformancesForActivity);


function findAllperformances(req, res) {
    performanceModel
        .findAllperformances()
        .then(function (performances) {
            res.json(performances);
        })
}

function findPerformanceById(req, res) {
    var performanceId = req.params['performanceId'];
    performanceModel
        .findPerformanceById(performanceId)
        .then(function (performance) {
            res.json(performance)
        });
}

function findPerformancesForActivity(req, res) {
    var activityId = req.params['activityId']
    performanceModel
        .findPerformancesForActivity(activityId)
        .then(function (performances) {
            res.json(performances)
        })

}



function updatePerformance(req, res) {
    var performanceId = req.params['performanceId'];
    var performance = req.body;
    console.log(performance); 
    performanceModel
        .updatePerformance(performanceId, performance)
        .then(function (response) {
            res.send(response)
        })
}

function deletePerformance(req, res) {
    var performanceId = req.params['performanceId'];
    performanceModel
        .deletePerformance(performanceId)
        .then(function (response) {
            res.send(response);
        })
}


function createPerformance(req, res) {
    var performance = req.body;
    console.log(performance);
    performanceModel
        .createPerformance(performance)
        .then(function (performance) {
            res.json(performance);
        })
}

function findPerformancesForStudent(req, res) {
    var studentId = req.params['studentId'];
    performanceModel
        .findPerformancesForStudent(studentId)
        .then(function (performances) {
            res.json(performances)
        })
}