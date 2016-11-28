/**
 * Created by Raptor on 13/06/16.
 */
(function() {
    var aires = angular.module('aires', [
        'ngRoute',
        'airesControllers',
        'ngSanitize'
    ]);

    aires.value('header', {
        brand: 'todos',
        model: 'todos',
        type: 'todos'
    });

    aires.value('comparar', {
        items: [0, 0, 0],
        numero: 0
    });

    aires.config(['$routeProvider', function($routeProvider){
        $routeProvider.
        when('/', {
            templateUrl: 'templates/inicio.html',
            controller: 'InicioController'
        }).
        otherwise('/', {
            templateUrl: 'templates/inicio.html'
        })
    }]);
})();