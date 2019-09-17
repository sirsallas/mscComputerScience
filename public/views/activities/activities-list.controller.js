(function () {
    angular
        .module("c2csms")
        .controller("activitiesListController", activitiesListController);

    function activitiesListController(currentUser, $routeParams, activitiesService) {

        var model = this;
        model.currentUser = currentUser;
        model.userId = $routeParams['userId'];

        function init() {
            if (model.userId) {
                activitiesService
                    .findActivitiesByInstructor(model.userId)
                    .then(function (activities) {
                        model.activities = activities;
                    })
            }
            else {
                activitiesService
                    .findAllActivities()
                    .then(function (activities) {
                        model.activities = activities;
                    })
            }
        }
        init();
    }
})
();
