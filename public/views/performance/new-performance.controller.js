(function () {
    angular
        .module("c2csms")
        .controller("newPerformanceController", performanceListController);  //change this 

    function performanceListController($routeParams, $location, performanceService, activitiesService, studentService) {

        var model = this;
        model.userId = $routeParams['userId'];
        model.activityId = $routeParams['activityId'];
        model.isReadOnly = model.activityId;
        model.availableStudents = [];
        model.newStudentId = "";

        // event handler
        model.createPerformance = createPerformance;

        function init() {
            activitiesService
                .findActivityById(model.activityId)
                .then(function (activity) {
                    model.activityName = activity.name
                })

            studentService
                .findAllStudents()
                .then(function (students) {
                    students.forEach(function (student) {
                        model.availableStudents.push({
                            id: student._id,
                            name: student.firstName + " " + student.lastName
                        });
                    })
                });
        }

        init();

        function createPerformance(performance) {
            if (!performance.activity) {
                performance.activity = model.activityId
            }
            performance.student = model.newStudentId;
            performanceService
                .createPerformance(performance)
                .then(function (performance) {
                    studentService
                        .findStudentById(performance.student) //After creating performance, update Student.performances with this performanceId
                        .then(function (student) {
                            student.performances.push(performance._id);
                            studentService
                                .updateStudent(student._id, student)
                                .then(function () {
                                    if (model.userId) {
                                        $location.url('/instructor/' + model.userId + '/activities/' + model.activityId + '/performance')
                                    }
                                    else {
                                        $location.url('/performance')
                                    }
                                })
                        })
                })
        }
    }
})
();
