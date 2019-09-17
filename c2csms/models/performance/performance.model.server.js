var mongoose = require('mongoose');
var performanceSchema = require('./performance.schema.server');
var performanceModel = mongoose.model('PerformanceModel', performanceSchema);

performanceModel.createPerformance = createPerformance;
performanceModel.findPerformanceById = findPerformanceById;
performanceModel.findPerformancesForStudent = findPerformancesByStudentId;
performanceModel.findPerformancesForActivity = findPerformanceByActivity;
performanceModel.updatePerformance = updatePerformance;
performanceModel.findAllperformances = findAllPerformances;
performanceModel.deletePerformance = deletePerformance;


module.exports = performanceModel;


function createPerformance(performance) {
    return performanceModel.create(performance)
}

function findPerformanceById(performanceId) {
    return performanceModel
        .findById(performanceId)
        .populate('student').exec();
}

function findPerformancesByStudentId(studentId) {
    return performanceModel.find({student: studentId}) 
    .populate('student').populate('activity').exec();
}

function updatePerformance(performanceId, performance) {
    return performanceModel.updateOne({_id: performanceId}, {
        $set: {
            grade: performance.grade,
            attendance: performance.attendance,
            activity: performance.activity,
            student: performance.student

        }
    })
}

function findPerformanceByActivity(activityId) {
    return performanceModel.find({activity: activityId}).populate('student').populate('activities').exec()
}

function findAllPerformances() {
    return performanceModel.find().populate('student').exec();
}

function deletePerformance(performanceId) {
    return performanceModel.deleteOne({_id: performanceId});
}