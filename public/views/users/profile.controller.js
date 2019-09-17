(function () {
    angular
        .module('c2csms')
        .controller('profileController', profileController);
    
    
    function profileController(currentUser, $location, $routeParams, userService) {

        var model = this;
        model.updateUser = updateUser;
        model.unregister = unregister;
        model.logout = logout;
        model.user = currentUser;
        console.log(model.user)
        // model.logout = logout;

        function logout() {
            userService
                .logout()
                .then(function () {
                    $location.url('/login')
                })
        }

        function unregister(){
            userService
            .unregister()
            .then(function(){
                userService.logout()
            })
            .then(function(){
                $location.url('/login')
            });
        }

        function updateUser(user){
            userService
            .updateUser(user._id, user)
            .then(function(){
                model.message= "User updated"
            });
        }

    }
})

();