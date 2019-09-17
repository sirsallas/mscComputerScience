(function () {
    angular
        .module("c2csms")
        .controller('feesEditController', feesEditController);

    function feesEditController($location, $routeParams, feesService) {

        var model = this;

        model.feesId = $routeParams['feesId'];

        // event handlers
        model.updateFees = updateFees;
        model.deleteFees = deleteFees;

        function init() {
            feesService
                .findFeesById(model.feesId)
                .then(function (fees) {
                    model.fees = fees;
                });
        }

        init();

        // implementation

        function updateFees(fees) {

            model.emptyfeesName = "";

            if (!fees.firstName) {
                model.emptyfeesName = "Please enter a fees name"
            }
            else {
                feesService
                    .updateFees(model.feesId, fees)
                    .then(function () {
                        $location.url('/fees');
                    });
            }
        }

        function deleteFees(feesId) {
            feesService
                .deleteFees(feesId)
                .then(function () {
                    $location.url('/fees');
                });
        }

    }


})
();