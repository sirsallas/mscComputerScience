(function () {
    angular
        .module("c2csms")
        .controller("newFeesController", feesListController);

    function feesListController($routeParams, $location, feesService, studentService) {

        var model = this;

        // event handler
        model.createFees = createFees;

        function init() {
        }

        init();

        function createFees(fees) {
            feesService
                .createFees(fees)
                .then(function (fees) {
                    studentService
                        .findStudentById(fees.student)
                        .then(function (student) {
                            student.fees = fees._id
                            studentService
                                .updateStudent(student._id, student)
                                .then(function () {
                                    $location.url('/fees')

                                })
                        })
                })
        }
    }
})
();
