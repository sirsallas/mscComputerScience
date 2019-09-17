var mongoose = require('mongoose');
var feesSchema = require('./fees.schema.server');
var feesModel = mongoose.model('FeesModel', feesSchema);

feesModel.createFees = createFees;
feesModel.findFeesById = findFeesById;
feesModel.updateFees = updateFees;
feesModel.findAllFees = findAllFees;
feesModel.deleteFees = deleteFees;
feesModel.findFeesForStudent = findFeesByStudentId;


module.exports = feesModel;


function createFees(fees) {
    return feesModel.create(fees)
}

function findFeesById(feesId) {
    return feesModel.findById(feesId);
}

function findFeesByStudentId(studentId) {
    return feesModel.findOne({student: studentId});
}

function updateFees(feesId, fees) {
    return feesModel.update({_id: feesId}, {
        $set: {
            description: fees.description,
            amountPaid: fees.description,
            datePaid: fees.datePaid,
            student: fees.student
        }
    })
}

function findAllFees() {
    return feesModel.find();
}

function deleteFees(feesId) {
    return feesModel.deleteOne({_id: feesId});
}