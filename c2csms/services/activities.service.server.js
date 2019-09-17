var app = require('../../express');
var activitiesModel = require('../models/activities/activities.model.server');

app.get('/api/c2csms/activities/:activityId', findActivityById);
app.put('/api/c2csms/activities/:activityId', updateActivities);
app.delete('/api/c2csms/activities/:activityId', deleteActivities);
app.post('/api/c2csms/activities', createActivities);
app.get('/api/c2csms/activities-list', findAllActivities);
app.get('/api/c2csms/activities/instructor/:userId', findActivitiesByInstructor);


function findAllActivities(req, res) {
    activitiesModel
        .findAllActivities()
        .then(function (activities) {
            res.json(activities);
        })
}

function findActivityById(req, res) {
    var activityId = req.params['activityId'];
    activitiesModel
        .findActivityById(activityId)
        .then(function (activities) {
            res.json(activities)
        });
}

function findActivitiesByInstructor(req, res) {
    var userId = req.params['userId'];
    activitiesModel
        .findActivitiesByInstructor(userId)
        .then(function (activities) {
            res.json(activities)
        })
}


function updateActivities(req, res) {
    var activityId = req.params['activityId'];
    var activities = req.body;
    activitiesModel
        .updateActivities(activityId, activities)
        .then(function (response) {
            res.send(response)
        })
}

function deleteActivities(req, res) {
    var activityId = req.params['activityId'];
    activitiesModel
        .deleteActivities(activityId)
        .then(function (response) {
            res.send(response);
        })
}


function createActivities(req, res) {
    var activities = req.body;
    activitiesModel
        .createActivities(activities)
        .then(function (activities) {
            res.json(activities);
        })
}