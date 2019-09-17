(function () {
    angular
        .module('c2csms')
        .factory('studentService', studentService);


    function studentService($http) {

        return {
            findStudentById: findStudentById,
            updateStudent: updateStudent,
            deleteStudent: deleteStudent,
            createStudent: createStudent,
            findAllStudents: findAllStudents,
            findStudentsForUser: findStudentsForUser,
            findPerformancesForStudent: findPerformancesForStudent,
            findFeesForStudent: findFeesForStudent
        };

        function findAllStudents() {
            var url = "/api/c2csms/student-list";
            return $http.get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function findStudentById(studentId) {
            var url = '/api/c2csms/student/' + studentId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function createStudent(student) {
            var url = '/api/c2csms/student';
            return $http
                .post(url, student)
                .then(function (response) {
                    return response.data;
                })
        }

        function deleteStudent(studentId) {
            var url = '/api/c2csms/student/' + studentId;
            return $http
                .delete(url)
                .then(function (response) {
                    return response.data
                })
        }

        function updateStudent(studentId, student) {
            var url = '/api/c2csms/student/' + studentId;
            return $http
                .put(url, student)
                .then(function (response) {
                    return response.data
                })
        }

        function findStudentsForUser(userId) {
            var url = '/api/c2csms/students/user/' + userId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function findPerformancesForStudent(studentId) {
            var url = '/api/c2csms/performances/student/' + studentId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data
                })
        }

        function findFeesForStudent(studentId) {
            var url = '/api/c2csms/fees/student/' + studentId;
            return $http
                .get(url)
                .then(function (response) {
                    return response.data
                })
        }
 
    }

})
();