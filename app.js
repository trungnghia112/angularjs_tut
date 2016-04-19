var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/book.html',
        controller: 'BookCtrl'
    });

});

myApp.controller('BookCtrl', ['$scope', function ($scope) {
    $scope.books = [{
        name: "nghia"
    }, {
        name: "thanh"
    }];
}]);