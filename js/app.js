/**
 * Created by Raptor on 13/06/16.
 */
(function() {
    var cite = angular.module('cite', [
        'ngRoute',
        'citeControllers',
        'ngSanitize'
    ]);

    cite.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when("/archive", {
                templateUrl: "templates/archive.html",
                controller: ""
            })
            .when("/content-mastery/:game", {
                templateUrl: "templates/content-mastery.html",
                controller: "contentMasteryController"
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })
            .when("/notifications", {
                templateUrl: "templates/notifications.html",
                controller: ""
            })
            .when("/pole/:number", {
                templateUrl: "templates/pole.html",
                controller: "PresentationController"
            })
            .when("/projects", {
                templateUrl: "templates/projects.html",
                controller: ""
            })
            .when("/trainings", {
                templateUrl: "templates/trainings.html",
                controller: "contentMasteryController"
            })
            .when('/welcome', {
                templateUrl: 'templates/inicio.html',
                controller: 'contentMasteryController'
            })
            .otherwise('/login', {
                templateUrl: 'templates/inicio.html'
            });
    }]);

})();