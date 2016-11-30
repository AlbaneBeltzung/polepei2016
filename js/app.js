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


var levels = ['a1', 'a2'];
var hintStrings = [['firetruck ...', 'color of a hammer', 'what color do bulls hate?', 'blood'],
    ['the sea is ...', 'eye color with pigmentation problem', 'classic business color', 'known song from the 90s']];
var answers = ['red', 'blue'];

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
function showHint() {
    if(count < maxHints) {
        if (count >= 1) {
            currentScore = currentScore - 10;
        }
        showCurrentScore();
        var hints = document.getElementsByClassName("hint");
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

function bla(){

}