(function () {
    angular
        .module('c2csms')
        .factory('performanceService', performanceService);


    function performanceService($http) {

        return {
            findPerformanceById: findPerformanceById,
            updatePerformance: updatePperformance,
            deletePerformance: deletePerformance,
            createPerformance: createPerformance,
            findAllPerformances: findAllPerformances,
            findPerformanceForActivity: findPerformanceForActivity
        };

        function findAllPerformances() {
            var url = "/api/c2csms/performance-list";
            return $http.get(url)
                .then(function (response) {
                    console.log(response.data);
                    return response.data
                })
        }

        function findPerformanceById(performanceId) {
            var url = '/api/c2csms/performance/' + performanceId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function findPerformanceForActivity(activityId) {
            var url = '/api/c2csms/performance/activity/'+ activityId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function createPerformance(performance) {
            var url = '/api/c2csms/performance';
            return $http
                .post(url, performance)
                .then(function (response) {
                    return response.data;
                })
        }

        function deletePerformance(performanceId) {
            var url = '/api/c2csms/performance/' + performanceId;
            return $http
                .delete(url)
                .then(function (response) {
                    return response.data
                })
        }

        function updatePperformance(performanceId, performance) {
            var url = '/api/c2csms/performance/' + performanceId;
            return $http
                .put(url, performance)
                .then(function (response) {
                    console.log(response.data);
                    return response.data
                })
        }


    }

})
();