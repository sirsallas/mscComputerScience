( function() {
    angular
        .module("c2csms")
        .controller('performanceEditController', performanceEditController);

    function performanceEditController($location, $routeParams, performanceService) {

        var model = this;

        model.performanceId = $routeParams['performanceId'];
        model.userId = $routeParams['userId'];

        // event handlers
        model.updatePerformance = updatePerformance;
        model.deletePerformance = deletePerformance;

        function init() {
            performanceService
                .findPerformanceById(model.performanceId)
                .then(function (performance) {
                    model.performance = performance;
                });
        }
        init();

        // implementation

        function updatePerformance(performance) {

            model.emptyperformanceName = "";

            if (!performance.activity) {
                model.emptyperformanceName = "Please enter a an activity name"
            }
            else {
                performanceService
                    .updatePerformance(model.performanceId, performance)
                    .then(function () {
                        $location.url('/performance');
                    });
            }
        }

        function deletePerformance(performanceId) {
            performanceService
                .deletePerformance(performanceId)
                .then(function () {
                    $location.url('/performance');
                });
        }

    }


})
();