(function () {
    angular
        .module('c2csms')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/users/login.view.html',
                controller: 'loginController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkCurrentUser
                }
            })
            .when('/login', {
                templateUrl: 'views/users/login.view.html',
                controller: 'loginController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkCurrentUser
                }
            })
            .when('/register', {
                templateUrl: 'views/users/register.view.html',
                controller: 'registerController',
                controllerAs: 'model'
            })
            .when('/profile', {
                templateUrl: 'views/users/profile.view.html',
                controller: 'profileController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.view.html',
                controller: 'dashboardController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR, GUARDIAN]
                    currentUser: checkLoggedIn
                }
            })
            .when('/performance', {
                templateUrl: 'views/performance/performance-list.view.html',
                controller: 'performanceListController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/performance/new', {
                templateUrl: 'views/performance/new-performance.view.html',
                controller: 'newPerformanceController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }

            })
            .when('/performance/:performanceId', {
                templateUrl: 'views/performance/edit-performance.view.html',
                controller: 'performanceEditController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/fees', {
                templateUrl: 'views/fees/fees-list.view.html',
                controller: 'feesListController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/fees/new', {
                templateUrl: 'views/fees/new-fees.view.html',
                controller: 'newFeesController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR
                    currentUser: checkLoggedIn
                }
            })
            .when('/fees/:feeId', {
                templateUrl: 'views/fees/edit-fees.view.html',
                controller: 'feesEditController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/activities', {
                templateUrl: 'views/activities/activities-list.view.html',
                controller: 'activitiesListController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/activities/new', {
                templateUrl: 'views/activities/new-activities.view.html',
                controller: 'activitiesNewController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/activities/:activityId', {
                templateUrl: 'views/activities/edit-activities.view.html',
                controller: 'activitiesEditController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/students/new', {
                templateUrl: 'views/students/new-student.view.html',
                controller: 'newStudentController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN]
                    currentUser: checkLoggedIn
                }
            })
            .when('/students/:studentId', {
                templateUrl: 'views/students/edit-student.view.html',
                controller: 'studentEditController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/students', {
                templateUrl: 'views/students/student-list.view.html',
                controller: 'studentListController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/user/:userId/students', {
                templateUrl: 'views/students/student-list.view.html',
                controller: 'studentListController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/user/:userId/student/:studentId', {
                templateUrl: 'views/students/edit-student.view.html',
                controller: 'studentEditController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
            .when('/user/:userId/students/new', {
                templateUrl: 'views/students/new-student.view.html',
                controller: 'newStudentController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN, INSTRUCTOR, GUARDIAN]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/activities', {
                templateUrl: 'views/activities/activities-list.view.html',
                controller: 'activitiesListController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/activities/new', {
                templateUrl: 'views/activities/new-activities.view.html',
                controller: 'activitiesNewController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/activities/:activityId', {
                templateUrl: 'views/activities/edit-activities.view.html',
                controller: 'activitiesEditController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/activities/:activityId/performance', {
                templateUrl: 'views/performance/performance-list.view.html',
                controller: 'performanceListController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/activities/:activityId/performance/new', {
                templateUrl: 'views/performance/new-performance.view.html',
                controller: 'newPerformanceController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/activities/:activityId/performance/:performanceId', {
                templateUrl: 'views/performance/edit-performance.view.html',
                controller: 'performanceEditController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/instructor/:userId/students', {
                templateUrl: 'views/students/student-list.view.html',
                controller: 'studentListController',
                controllerAs: 'model',
                resolve: {
                    // [INSTRUCTOR]
                    currentUser: checkLoggedIn
                }
            })
            .when('/users/new', {
                templateUrl: 'views/users/new-user.view.html',
                controller: 'newUserController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN]
                    currentUser: checkLoggedIn
                }
            })
            .when('/users', {
                templateUrl: 'views/users/user-list.view.html',
                controller: 'userListController',
                controllerAs: 'model',
                resolve: {
                    // [ADMIN]
                    currentUser: checkLoggedIn
                }
            })
            .when('/users/:userId', {
                templateUrl: 'views/users/edit-user.view.html',
                controller: 'userEditController',
                controllerAs: 'model',
                resolve: {
                    currentUser: checkLoggedIn
                }
            })
    }

    function checkLoggedIn($q, $location, userService) {
        var deferred = $q.defer();
        userService
            .checkLoggedIn()
            .then(function (currentUser) {
                if (currentUser === '0') {
                    deferred.reject();
                    $location.url('/');
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }


    function checkCurrentUser($q, userService) {
        var deferred = $q.defer();
        userService
            .checkLoggedIn()
            .then(function (currentUser) {
                if (currentUser === '0') {
                    deferred.resolve({});
                } else {
                    deferred.resolve(currentUser);
                }
            });
        return deferred.promise;
    }
})();
