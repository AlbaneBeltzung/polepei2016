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
citeControllers.controller('PresentationController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams){

    $scope.images = {
        0:   "assets/presentation/extern.jpg",
        1:   "assets/presentation/extern2.jpg",
        2:   "assets/presentation/extern5.jpg",
        3:   "assets/presentation/extern6.jpg",
        4:   "assets/presentation/extern7.jpg",
        5:   "assets/presentation/extern8.jpg",
        6:   "assets/presentation/extern9.jpg",
        7:   "assets/presentation/extern3.jpg",
        8:   "assets/presentation/extern4.jpg",
        9:   "assets/presentation/extern10.jpg",
        10:   "assets/presentation/extern11.jpg",
        11:   "assets/presentation/extern12.jpg",
        12:   "assets/presentation/extern13.jpg",
        13:   "assets/presentation/intern.jpg",
        14:   "assets/presentation/intern2.jpg",
        15:   "assets/presentation/intern3.jpg",
        16:   "assets/presentation/intern4.jpg",
        17:   "assets/presentation/intern5.jpg",
        18:   "assets/presentation/intern6.jpg",
        19:   "assets/presentation/intern7.jpg",
        20:   "assets/presentation/intern8.jpg"
    };

    $scope.number = $routeParams.number;
    $scope.currentImage = $scope.images[$scope.number];

    $scope.changeImage = function(block){
        console.log($scope.number + " | " +block);
        if($scope.number==18){
            $location.path('/content-mastery/game1');
        }else{
            $scope.number++;
        }
        /*if(block==3){
            $scope.number=0;
        } else {
            if($scope.number==5 && block==9){
                $scope.number=4;
            }else{
                if($scope.number==18 && block==9){
                    $location.path('/content-mastery/game1');
                }else{

                }
            }
        }*/
    }

}]);
citeControllers.controller('headerController', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location){
    /* Set the width of the side navigation to 250px */
    $scope.openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
    };
    if($location.path() == "welcome" || $location.path() == "content-mastery/game1"){
        $scope.presentation = true;
    }
    if($routeParams.game){
        $scope.presentation = true;
    }
    $scope.presenting = function(){
        $scope.presentation = !$scope.presentation;
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
        }
    };

    $scope.toGame = function(gameNum){
        $scope.game = gameNum;
        if($scope.currentLevel >= $scope.games[$scope.game].number){
            $scope.hintsNum = 1;
            $scope.maxHints = $scope.games[$scope.game].hints.length;
            $scope.hints = $scope.games[$scope.game].hints;
            $scope.currentScore = $scope.games[$scope.game].points;
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
