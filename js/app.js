/**
 * Created by Raptor on 13/06/16.
 */
(function() {
    var cite = angular.module('cite', [
        'ngRoute',
        'citeControllers',
        'ngSanitize'
    ]);

    cite.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
            templateUrl: 'templates/inicio.html',
            controller: 'contentMasteryController'
        })

            .when("/trainings", {
                templateUrl : "templates/trainings.html",
                controller: "contentMasteryController"
        })

            .when("/content-mastery/:game", {
                templateUrl : "templates/content-mastery.html",
                controller: "contentMasteryController"
            })

            .otherwise('/', {
                templateUrl: 'templates/inicio.html'
        })
    }]);
})();