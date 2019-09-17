(function () {
    angular
        .module('c2csms')
        .controller('registerController', registerController);

    function registerController($location, userService) {

        var model = this;

        // event handlers
        model.register = register;

        // implementation
        function register(firstName, lastName, email, password, password2) {

            model.emptyFirstName = "";
            model.emptyLastName= "";
            model.emptyEmail = "";
            model.emptyPassword = "";
            model.emptyPassword2 = "";
            model.blankFields = "";

            if (!firstName) {
                model.emptyFirstName = "enter a first name"
                model.blankFields = true
            }

            if (!lastName) {
                model.emptyLastName= "enter a last name";
                model.blankFields = true
            }

            if (!email) {
                model.emptyEmail = "enter an email";
                model.blankFields = true
            }

            if (!password) {
                model.emptyPassword = "enter a password";
                model.blankFields = true
            }

            if (!password2) {
                model.emptyPassword2 = "retype password";
                model.blankFields = true
            }

            if (model.blankFields) {
                model.blankFields = "Some fields have been left empty"
                return
            }

            console.log("register here bro")
            userService
                .findUserByEmail(email)
                .then(function (found) {
                    console.log(found);
                    if (found) {
                        handleError('email')
                    }
                    else {
                        registerUser();
                    }
                });

            function registerUser() {

                if (password !== password2) {
                    handleError('password')
                }
                else {
                    var user = {
                        firstName: firstName,
                        lastName: lastName,
                        email:email,
                        password:password
                    };
                    userService
                        .register(user)
                        .then(function (user) {
                            $location.url('/profile');
                        })
                }

            }

            function handleError(error) {
                switch(error) {
                    case 'email':
                        model.error = "Email " + email+ " is not" +
                            " available";
                        break;
                    case 'password':
                        model.error = "passwords must match";
                        break;
                    default:
                        model.error = "error, please try again";
                }
            }

        }
    }
})();