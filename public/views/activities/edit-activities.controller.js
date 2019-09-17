(function () {
    angular
        .module("c2csms")
        .controller('activitiesEditController', activitiesEditController);

    function activitiesEditController($location, $routeParams, activitiesService, studentService, $route) {

        var model = this;

        model.activityId = $routeParams['activityId'];
        model.userId = $routeParams['userId'];
        model.isReadOnly = true;
        model.availableStudents = [];

        // event handlers
        model.updateActivity = updateActivity;
        model.deleteActivity = deleteActivities;
        model.toggleEditing = toggleEditing;
        model.enrollStudent = enrollStudent;


        function init() {
            model.classStudents = [];

            activitiesService
                .findActivityById(model.activityId)
                .then(function (activities) {
                    model.activities = activities;
                    console.log(model.activities)
                })
                .then(function () {
                    studentService
                        .findAllStudents()
                        .then(function (students) {
                            students.forEach(function (student) {
                                model.availableStudents.push({
                                    id: student._id,
                                    name: student.firstName + " " + student.lastName
                                });
                                if (model.activities.students.includes(student._id)) {
                                    model.classStudents.push(student)
                                }
                            })
                        });
                })

        }

        init();

        // implementation

        function updateActivity(activities) {
            model.emptyactivitiesName = "";

            if (!activities.name) {
                model.emptyactivitiesName = "Please enter a activities name"
            }
            else {
                activitiesService
                    .updateActivities(model.activityId, activities)
                    .then(function () {
                        if (model.userId) {
                            $location.url('/instructor/' + model.userId + '/activities')
                        }
                        else {
                            $location.url('/activities');
                        }
                    });
            }
        }

        function deleteActivities(activityId) {
            activitiesService
                .deleteActivities(activityId)
                .then(function () {
                    $location.url('/activities');
                });
        }

        function toggleEditing() {
            model.isReadOnly = !model.isReadOnly
        }

        function enrollStudent(studentId) {
            model.activities.students.push(studentId);
            console.log(model.activities)
            activitiesService
                .updateActivities(model.activityId, model.activities)
                .then(function (activity) {
                    console.log(activity)
                    $route.reload()
                })

        }

    }


})
();