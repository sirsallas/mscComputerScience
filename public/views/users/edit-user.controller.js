( function() {
    angular
        .module("c2csms")
        .controller('userEditController', userEditController);

    function userEditController($location, $routeParams, userService) {

        var model = this;

        model.userId = $routeParams['userId'];

        // event handlers
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;

        function init() {
            console.log(model.userId);

            userService
                .findUserById(model.userId)
                .then(function (user) {
                    model.user = user;
                });
            // studentService
            //     .findPageById(model.pageId)
            //     .then(function (page) {
            //         model.page = page
            //     });
        }
        init();

        // implementation

        function updateUser(user) {

            model.emptyStudentName = "";

            if (!user.firstName) {
                model.emptyStudentName = "Please enter a user's name"
            }
            else {
                userService
                    .updateUser(model.userId, user)
                    .then(function () {
                        $location.url('/users');
                    });
            }
        }

        function deleteUser(userId) {
            userService
                .deleteUser(userId)
                .then(function () {
                    $location.url('/users');
                });
        }

    }


})
();