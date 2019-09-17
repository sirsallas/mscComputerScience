(function () {
    angular
        .module("c2csms")
        .controller("performanceListController", performanceListController);

    function performanceListController(currentUser, $routeParams, $route, performanceService) {

        var model = this;
        model.currentUser = currentUser;
        model.userId = $routeParams['userId'];
        model.activityId = $routeParams['activityId'];


        model.deletePerformance = deletePerformance;

        function init() {
            if (model.userId) {
                performanceService
                    .findPerformanceForActivity(model.activityId)
                    .then(function (performances) {
                        model.performances = performances
                    })
            }
            else {
                performanceService
                    .findAllPerformances()
                    .then(function (performances) {
                        model.performances = performances
                    })
            }

        }

        init();

        function deletePerformance(performanceId) {
            performanceService
                .deletePerformance(performanceId)
                .then(function () {
                    if (model.userId) {
                        $route.reload()
                    }
                    else {
                        $route.reload()
                    }
                });
        }
    }
})
();
