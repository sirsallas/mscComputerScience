var mongoose = require('mongoose');
var activitiesSchema = require('./activities.schema.server');
var activitiesModel = mongoose.model('ActivitiesModel', activitiesSchema);

activitiesModel.createActivities = createActivities;
activitiesModel.findActivityById = findActivityById;
activitiesModel.updateActivities = updateActivities;
activitiesModel.findAllActivities = findAllActivities;
activitiesModel.deleteActivities = deleteActivities;
activitiesModel.findActivitiesByInstructor = findActivitiesByInstructor;


module.exports = activitiesModel;


function createActivities(activities) {
    return activitiesModel.create(activities)
}

function findActivityById(activityId) {
    return activitiesModel.findById(activityId);
}

function findActivitiesByInstructor(userId) {
    return activitiesModel.find({instructor: userId});
}

function updateActivities(activityId, activities) {
    return activitiesModel.updateOne({_id: activityId}, {
        $set: {
            name: activities.name,
            term: activities.term,
            year: activities.year,
            students: activities.students
        }
    })
}

function findAllActivities() {
    return activitiesModel.find().populate('instructor').exec();
}

function deleteActivities(activityId) {
    return activitiesModel.deleteOne({_id: activityId});
}