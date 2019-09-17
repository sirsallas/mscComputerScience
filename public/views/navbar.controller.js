(function () {
    angular
        .module('c2csms')
        .controller('navbarController', navbarController);
    
    
    function navbarController($location, $routeParams, userService) {

        var model = this;
        model.logout = logout;
        model.isLoggedIn = false;

        function logout() {
            userService
                .logout()
                .then(function () {
                    $location.url('/')
                })
        }

        function checkLoggedIn() {
            userService
                .checkLoggedIn()
                .then(function (user) {
                    if (user._id){
                        model.isLoggedIn = true;
                    }
                })
        }
        checkLoggedIn();
    }
})
();