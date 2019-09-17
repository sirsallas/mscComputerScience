(function () {
    angular
        .module("c2csms")
        .controller("studentListController", studentListController);

    function studentListController(currentUser, $routeParams, studentService) {

        var model = this;
        model.deleteStudent = deleteStudent;
        model.currentUser = currentUser;

        model.userId = $routeParams['userId'];

        function init() {
            if (model.userId) {
                studentService
                    .findStudentsForUser(model.userId)
                    .then(function (students) {
                        model.students = students
                    })
            }
            else {
                studentService
                    .findAllStudents()
                    .then(function (students) {
                        model.students = students
                    })
            }
        }

        init();


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