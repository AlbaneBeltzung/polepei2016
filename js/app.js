/**
 * Created by Raptor on 13/06/16.
 */
(function () {
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


    aires.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/inicio.html',
                controller: 'InicioController'
            })

            .when("/trainings", {
                templateUrl: "templates/trainings.html"
            })

            .when("/content-mastery", {
                templateUrl: "templates/content-mastery.html"
            })

            .otherwise('/', {
                templateUrl: 'templates/inicio.html'
            })
    }]);
})();

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function togGame(target) {
    if (document.getElementById(target).style.display == "none") {
        showHint();
        document.getElementById(target).style.display = "block";
    } else {
        document.getElementById(target).style.display = "none";
    }
}

var count = 0;
function showHint() {
    var hints = document.getElementsByClassName("hint");
    newHint = hints[count];
    newHint.style.display = "block";
    count = count+1;
}