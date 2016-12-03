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

citeControllers.controller('contentMasteryController', ['$scope', '$routeParams', function($scope, $routeParams){

    $scope.game = $routeParams.game;

    $scope.toGame = function(gameNum){
        $scope.game1 = true;
        $scope.hint = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore";
    }


}]);
