(function () {
    angular
        .module("c2csms")
        .controller("activitiesNewController", activitiesListController);

    function activitiesListController($routeParams, $location, activitiesService) {

        var model = this;
        model.activities = {};

        // event handler
        model.createActivities = createActivities;
        model.userId = $routeParams['userId'];
        if (model.userId) {
            model.isReadOnly = model.userId;
            model.activities.instructor = model.userId
        }

        function init() {
        }

        init();

        function createActivities(activities) {
            activities.instructor = model.userId;
            activitiesService
                .createActivities(activities)
                .then(function (activity) {
                    if (model.userId) {
                        $location.url('/instructor/' + model.userId + '/activities')
                    }
                    else {
                        $location.url('/activities')
                    }
                })
        }
    }
})
();
