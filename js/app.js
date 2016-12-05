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
            .when('/', {
                templateUrl: 'templates/inicio.html',
                controller: 'contentMasteryController'
            })

            .when("/trainings", {
                templateUrl: "templates/trainings.html",
                controller: "contentMasteryController"
            })

            .when("/content-mastery/:game", {
                templateUrl: "templates/content-mastery.html",
                controller: "contentMasteryController"
            })
            .otherwise('/', {
                templateUrl: 'templates/inicio.html'
            });
    }]);

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

    var currentScore = 60;

    function showCurrentScore() {
        document.querySelector('.current-score').innerHTML = currentScore;
    }

    var count = 0;
    var maxHints = 4;
    var hints = document.getElementsByClassName("hint");

    function showHint() {
        if (count < maxHints) {
            if (count >= 1) {
                currentScore = currentScore - 10;
            }
            showCurrentScore();
            newHint = hints[count];
            newHint.style.display = "block";
            count = count + 1;
        }
    }

    var totalScore = 0;

    function showTotalScore() {
        document.querySelector('.total-score').innerHTML = totalScore;
    }

    function addNewScored() {
        totalScore = totalScore + currentScore;
    }

    function verify() {
        addNewScored();
        showTotalScore();
    }

    function switchGame(game) {
        var count = 0;
        for (hint in hints) {
            hints[hint].innerHTML = game.hints[count].toString();
            count = count + 1;
        }
    }

    var game1 = {
        answer: "red",
        hints: ["blub", "blab", "hello", "yeah"]
    };

    var game2 = {
        answer: "blue",
        hints: ["I'm", "blue", "dabadi", "dabada"]
    };
})();