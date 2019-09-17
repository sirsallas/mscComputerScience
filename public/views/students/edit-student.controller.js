( function() {
    angular
        .module("c2csms")
        .controller('studentEditController', studentEditController);

    function studentEditController($location, $routeParams, studentService, currentUser) {

        var model = this;

        model.studentId = $routeParams['studentId'];
        model.userId = $routeParams['userId'];

        // event handlers
        model.updateStudent = updateStudent;
        model.deleteStudent = deleteStudent;
        model.currentUser = currentUser;

        function init() {
            studentService
                .findStudentById(model.studentId)
                .then(function (student) {
                    model.student = student;
                    model.student.dateOfBirth = new Date(model.student.dateOfBirth)
                });

            // We could also use performanceService.findPerformanceById here and use student.performances array
            // This is fast because we dont wait to find studentById before making another
            // request to get that students performances. We use the userId from the routeParams to do the fetchin
            studentService
                .findPerformancesForStudent(model.studentId)
                .then(function (performances) {
                    model.student.performances = performances
                    console.log(model.student.performances)
                });

            studentService
                .findFeesForStudent(model.studentId)
                .then(function (fees) {
                    console.log(fees)
                    model.studentFees = fees
                })
        }
        init();

        // implementation

        function updateStudent(student) {

            model.emptyStudentName = "";

            if (!student.firstName) {
                model.emptyStudentName = "Please enter a student name"
            }
            
            else {
                studentService
                    .updateStudent(model.studentId, student)
                    .then(function () {
                        $location.url('/students');
                    });
            }
        }

        function deleteStudent(studentId) {
            studentService
                .deleteStudent(studentId)
                .then(function () {
                    $location.url('/students');
                });
        }

    }


})
();