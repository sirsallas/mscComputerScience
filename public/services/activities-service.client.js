(function () {
    angular
        .module('c2csms')
        .factory('activitiesService', activitiesService);


    function activitiesService($http) {

        return {

            findActivityById: findActivityById,
            updateActivities: updateActivities,
            deleteActivities: deleteActivities,
            createActivities: createActivities,
            findAllActivities: findAllActivities,
            findActivitiesByInstructor: findActivitiesByInstructor
        };

        function findAllActivities() {
            var url = "/api/c2csms/activities-list";
            return $http.get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function findActivitiesByInstructor(userId) {
            var url = "/api/c2csms/activities/instructor/" + userId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function findActivityById(activityId) {
            var url = '/api/c2csms/activities/' + activityId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function createActivities(activities) {
            var url = '/api/c2csms/activities';
            return $http
                .post(url, activities)
                .then(function (response) {
                    return response.data;
                })
        }

        function deleteActivities(activityId) {
            var url = '/api/c2csms/activities/' + activityId;
            return $http
                .delete(url)
                .then(function (response) {
                    return response.data
                })
        }

        function updateActivities(activityId, activities) {
            var url = '/api/c2csms/activities/' + activityId;
            return $http
                .put(url, activities)
                .then(function (response) {
                    return response.data
                })
        }
    }

})
();