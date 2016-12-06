/**
 * Created by Raptor on 13/06/16.
 */
var citeControllers = angular.module('citeControllers', []);
citeControllers.controller('headerController', ['$scope', function($scope){
    /* Set the width of the side navigation to 250px */
    $scope.openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
    };

    /* Set the width of the side navigation to 0 */
    $scope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
    };

}]);

function levelAchieved(achievedLevel){
    document.getElementsByClassName("game-feedback").style.background = "green";

}

citeControllers.controller('contentMasteryController', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.game = $routeParams.game;
    $scope.totalScore = 0;
    $scope.currentLevel = 1;
    $scope.games = {
        "game1": {
            number: 1,
            answer: "red",
            points:50,
            hints: ["blub", "blab", "hello", "yeah"],
            id: "level1"
        },
        "game2": {
            number: 2,
            answer: "blue",
            hints: ["I'm", "blue", "dabadi", "dabada"]
        },
        "game3": {
            number: 3,
            answer: "green",
            points:50,
            hints: ["blub", "green", "hello", "yeah"]
        },
        "game4": {
            number: 4,
            answer: "yellow",
            points:100,
            hints: ["blub", "yellow", "hello", "yeah"]
        },
        "game5": {
            number: 5,
            answer: "black",
            points:100,
            hints: ["blub", "black", "hello", "yeah"]
        },
        "game6": {
            number: 6,
            answer: "gray",
            points:200,
            hints: ["blub", "gray", "hello", "yeah"]
        }
    };

    $scope.toGame = function(gameNum){
        $scope.game = gameNum;
        if($scope.currentLevel >= $scope.games[$scope.game].number){
            $scope.hintsNum = 0;
            $scope.maxHints = $scope.games[$scope.game].hints.length;
            $scope.hints = $scope.games[$scope.game].hints;
            $scope.currentScore = $scope.games[$scope.game].points;
            $scope.game1 = true;
        }else{
            $scope.message = "You don't have access to this level";
        }
    };

    $scope.showHint = function() {
        if ($scope.hintsNum < $scope.maxHints) {
            if ($scope.hintsNum >= 1) {
                $scope.currentScore -= 10;
            }
            $scope.hintsNum++;
        }
    };

    $scope.verify = function(){
        if($scope.answer == $scope.games[$scope.game].answer){
            $scope.totalScore += $scope.currentScore;
            $scope.message = "Correct, now Play next level";
            document.getElementById($scope.games[$scope.game].id).style.backgroundColor = "green";
            $scope.currentLevel++;
            $scope.toGame('game'+($scope.games[$scope.game].number+1));
        } else {
            $scope.message = "Wrong Answer";
        }
    };

}]);
