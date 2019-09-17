(function () {
    angular
        .module("c2csms")
        .controller("newStudentController", newStudentController);


    function newStudentController(currentUser, $routeParams, $location, studentService) {

        var model = this;


        // event handler
        model.createStudent = createStudent;
        model.currentUser = currentUser;
        model.userId = $routeParams['userId'];

        model.student = {};
        if (model.userId) {
            model.isReadOnly = model.userId;
            model.student.primaryGuardian = model.userId
        }

        function init() {
        }

        init();

        function createStudent(student) {
            studentService
                .createStudent(student)
                .then(function (student) {
                    if (model.userId) {
                        $location.url('/user/' + model.userId + '/students');
                    }
                    else {
                        $location.url('/students')
                    }
                })
        }
    }
})
();
