(function () {
    angular
        .module("c2csms")
        .controller("feesListController", feesListController);

    function feesListController($routeParams, feesService) {

        var model = this;

        function init() {
             feesService
                 .findAllFees()
                 .then(function(fees) {
                  model.fees = fees
                })
       //  model.fees = feesService.findAllFees()
      //   console.log(model.fees)
        }
        init();
    }
})
();
