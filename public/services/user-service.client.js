(function () {
    angular
        .module('c2csms')
        .factory('userService', userService);

    function userService($http) {

        return {
            login: login,
            logout: logout,
            createUser: createUser,
            register: register,
            findUserById: findUserById,
            findAllUsers: findAllUsers,
            updateUser: updateUser,
            findUserByEmail: findUserByEmail,
            deleteUser: deleteUser,
            checkLoggedIn: checkLoggedIn,
            unregister: unregister
        };

        function login(email, password) {
            var url = "/api/c2csms/login";
            var loginDetails = {
                email: email,
                password: password
            };
            console.log(loginDetails)
            return $http //library for handling req and res httprequestlibtary
                .post(url, loginDetails)
                .then(function (response) {
                    console.log(response.data);
                    return response.data;
                })
        }

        function checkLoggedIn(req, res) {
            var url = "/api/c2csms/checkLoggedIn"
            return $http
                .get(url)
                .then(function (response) {
                    return response.data
            })
        }

        function createUser(user) {
            var url = '/api/c2csms/user';
            console.log("first");
            console.log(user);
            return $http
                .post(url, user)
                .then(function (response) {
                    return response.data;
                })
        }

        function findAllUsers() {
            var url = "/api/c2csms/users";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function register(user) {
            var url = "/api/c2csms/register";
            console.log(user);
            return $http
                .post(url, user)
                .then(function (response) {
                    
                    return response.data
                })
        }

        function unregister() {
            var url = "/api/c2csms/unregister";
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function findUserById(userId) {
            var url = "/api/c2csms/user/" + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByEmail(email) {
            var url = "/api/c2csms/user?email="+ email;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function logout() {
            var url = '/api/c2csms/logout';
            return $http
                .post(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function updateUser(userId, user) {
            var url = "/api/c2csms/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteUser(userId) {
            var url = "/api/c2csms/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }



})();