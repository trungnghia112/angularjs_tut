var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function ($scope, $timeout, $filter) {
    $scope.name = 'nghia';
    $timeout(function () {
        $scope.name = "hoho";
    }, 1000 * 3);


    $scope.username = "";
    $scope.toLowerCaseUsername = function () {
        return $filter('lowercase')($scope.username);
    };
    $scope.usernamemax = 5;

    $scope.$watch("username", function (newValue, oldValue) {
        console.log('changed');
        console.log('newValue:' + newValue);
        console.log('oldValue:' + oldValue);
    });

    /*$timeout(function () {
     $scope.username = "hoho";
     }, 1000 * 3);*/

    /*setTimeout(function () {
     $scope.$apply(function () {
     $scope.username = 'nghiatran';
     console.log('changed username');
     });

     },1000*3)*/


    $scope.rules = [
        {
            ruleName: 'Tài khoản ít nhất có 5 ký tự'
        },
        {
            ruleName: 'Tài khoản chưa được sử dụng'
        },
        {
            ruleName: 'Tài khoản có ý nghĩa 1 chút'
        }
    ];


    $scope.nameClick = 'nghia222';

    $scope.alertClick = function () {
        alert('alertClick');
    }


}]);