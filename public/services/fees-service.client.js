(function () {
    angular
        .module('c2csms')
        .factory('feesService', feesService);


    function feesService($http) {

        return {
         
            findFeesById: findFeesById,
            updateFees: updateFees,
            deleteFees: deleteFees,
            createFees: createFees,
            findAllFees: findAllFees
            
        };

    

       

        function findAllFees() {
            var url = '/api/c2csms/fees-list';
            return $http.get(url)
                .then(function (response) {
                    console.log(response.data);
                    return response.data
                })
        }

        function findFeesById(feesId) {
            var url = '/api/c2csms/fees/' + feesId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function createFees(fees) {
            var url = '/api/c2csms/fees';
            return $http
                .post(url, fees)
                .then(function (response) {
                    return response.data;
                })
        }

        function deleteFees(feesId) {
            var url = '/api/c2csms/fees/' + feesId;
            return $http
                .delete(url)
                .then(function (response) {
                    return response.data
                })
        }

        function updateFees(feesId, fees) {
            var url = '/api/c2csms/fees/' + feesId;
            return $http
                .put(url, fees)
                .then(function (response) {
                    return response.data
                })
        }

 
    }

})
();