var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/detail', {
            templateUrl: 'pages/detail.html',
            controller: 'detailController'
        })
        .when('/detail/:id', {
            templateUrl: 'pages/detail.html',
            controller: 'detailController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

myApp.service('nameService', function () {
    var self = this;
    this.name = "Nghia nameservice";
    this.nameLength = function () {
        return self.name.length;
    };
});

myApp.factory('namefactory', function () {
    return {
        name: "Nghia nameservice",
        nameLength: function () {
            return this.name.length;
        }
    }
});


myApp.directive('searchResult', function () {

    return {
        template: '<a href="#" class="list-group-item"><h4>Title</h4><p>Noi dung</p></a>',
        replace: true
    }

});


myApp.controller('mainController', ['$scope', 'nameService', 'namefactory', function ($scope, nameService, namefactory) {
    /*$scope.name = nameService.name;
     $scope.$watch('name', function () {
     nameService.name = $scope.name;
     });*/

    $scope.name = namefactory.name;
    $scope.$watch('name', function () {
        namefactory.name = $scope.name;
    });
}]);
myApp.controller('detailController', ['$scope', '$routeParams', 'nameService', 'namefactory', function ($scope, $routeParams, nameService, namefactory) {
    /*var id = $routeParams.id || 1;
     $scope.name = nameService.name;
     $scope.$watch('name', function () {
     nameService.name = $scope.name;
     });*/

    $scope.name = namefactory.name;
    $scope.$watch('name', function () {
        namefactory.name = $scope.name;
    });

}]);