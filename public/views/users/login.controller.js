(function () {
        angular
            .module("c2csms")
            .controller("loginController", loginController);

        function loginController(currentUser, $routeParams, $location, userService) {

            var model = this;
            model.currentUser = currentUser;

            if (model.currentUser._id) {
                $location.url('/dashboard')
            }

            model.login = function (email, password) {

                model.emptyemail = "";
                model.emptyPassword = "";

                if (!email) {
                    model.emptyemail = "enter a email";
                    return
                }

                if (!password) {
                    model.emptyPassword = "enter a password";
                    return
                }
                
                console.log(email, password)
                userService
                    .login(email, password)
                    .then(login, handleError);

                function handleError(error) {
                    model.message = "email " + email + " not found with" +
                        " that password, please try again";
                }

                function login(found) {
                    if (found !== null) {
                        $location.url('/dashboard');
                    } else {
                        model.message = "email " + email + " not found" +
                            " with that password, please try again";
                    }
                }
            }
        }
    })
();
