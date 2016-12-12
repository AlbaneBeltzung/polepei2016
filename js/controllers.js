/**
 * Created by Raptor on 13/06/16.
 */
var citeControllers = angular.module('citeControllers', []);
citeControllers.controller('LoginController', ['$scope', '$location', function($scope, $location){
    $scope.user = {};
    $scope.user.email = 'admin@cemexite.com';
    $scope.user.password = 'Cemexite2016';

    $scope.login = function(){

        if($scope.user == $scope.user){
            $location.path('/welcome');
        }

    }

}]);
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

citeControllers.controller('contentMasteryController', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.game = $routeParams.game;
    $scope.totalScore = 0;
    $scope.currentLevel = 1;
    $scope.games = {
        "game1": {
            number: 1,
            answer: "promptis",
            points:50,
            hints: ["Based on the interaction of two CEMEX admixtures.",
                "Good resistance to shrinkage cracking",
                "Workability for over 90 minutes, thus allowing the material to be easily handled without the risk of sudden hardening, even under extremely hot weather",
                "Reaches early compressive strength in as fast as 4 hours , compared with an average of 18 hours in conventional concrete."]
        },
        "game2": {
            number: 2,
            answer: "pervia",
            points:50,
            hints: ["Can be used for any structural applications (roads, vertical walls, ..)",
                {img: "assets/IMG_0088.JPG"},
                "Can be used for light weight or floating structures",
                "Pororisity can be engineered to absorb, retain and release water on demand."]
        },
        "game3": {
            number: 3,
            answer: "promptis",
            points:50,
            hints: ["Based on the interaction of two CEMEX admixtures.",
                "Good resistance to shrinkage cracking",
                "Workability for over 90 minutes, thus allowing the material to be easily handled without the risk of sudden hardening, even under extremely hot weather",
                "Reaches early compressive strength in as fast as 4 hours , compared with an average of 18 hours in conventional concrete."]
        },
        "game4": {
            number: 4,
            answer: "pervia",
            points:100,
            hints: ["Can be used for any structural applications (roads, vertical walls, ..)",
                {img: "assets/IMG_0088.JPG"},
                "Can be used for light weight or floating structures",
                "Pororisity can be engineered to absorb, retain and release water on demand."]
        },
        "game5": {
            number: 5,
            answer: "promptis",
            points:100,
            hints: ["Based on the interaction of two CEMEX admixtures.",
                "Good resistance to shrinkage cracking",
                "Workability for over 90 minutes, thus allowing the material to be easily handled without the risk of sudden hardening, even under extremely hot weather",
                "Reaches early compressive strength in as fast as 4 hours , compared with an average of 18 hours in conventional concrete."]
        },
        "game6": {
            number: 6,
            answer: "pervia",
            points:200,
            hints: ["Can be used for any structural applications (roads, vertical walls, ..)",
                {img: "assets/IMG_0088.JPG"},
                "Can be used for light weight or floating structures",
                "Pororisity can be engineered to absorb, retain and release water on demand."]
        },
    };

    $scope.toGame = function(gameNum){
        $scope.game = gameNum;
        if($scope.currentLevel >= $scope.games[$scope.game].number){
            $scope.hintsNum = 1;
            $scope.maxHints = $scope.games[$scope.game].hints.length;
            $scope.hints = $scope.games[$scope.game].hints;
            $scope.currentScore = $scope.games[$scope.game].points;
            $scope.game1 = true;
        }else{
            $scope.message = "You don't have access to this level";
            $scope.messageClass = "bg-warning";
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
        if($scope.answer.toLowerCase() == $scope.games[$scope.game].answer){
            $scope.answer = "";
            $scope.totalScore += $scope.currentScore;
            $scope.message = "Correct, now Play next level";
            $scope.messageClass = "bg-success";
            $scope.currentLevel++;
            $scope.toGame('game'+($scope.games[$scope.game].number+1));
        } else {
            $scope.message = "Wrong Answer";
            $scope.messageClass = "bg-danger";
        }
    };

}]);
