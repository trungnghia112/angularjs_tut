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
        restrict: 'AECM',
        //template: '<a href="#" class="list-group-item"><h4>Title</h4><p>Noi dung</p></a>',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            //personName: '@',
            //personAddress: '@',
            personObject: '='
        },
        /*compile: function compile(tElement, tAttrs, transclude) {
            console.log(tElement.html());
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {

                },
                post: function postLink(scope, iElement, iAttrs, controller) {

                    if(scope.personObject.name == 'nghia tran2'){
                        iElement.addClass('active');
                    }

                }
            }
        }*/
        link: function postLink(scope, iElement, iAttrs) {

            if (scope.personObject.name == 'nghia tran2') {
                iElement.addClass('active');
            }

        },
        transclude: true

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

    /*$scope.person = {
     name: "nghia tran1",
     address: "181 dien bien phu",
     city: 'ho chi minh',
     country: 'vietnam'
     }*/

    $scope.people = [
        {
            name: "nghia tran1",
            address: "181 dien bien phu",
            city: 'ho chi minh',
            country: 'vietnam'
        },
        {
            name: "nghia tran2",
            address: "182 dien bien phu",
            city: 'ho chi minh',
            country: 'vietnam'
        },
        {
            name: "nghia tran3",
            address: "183 dien bien phu",
            city: 'ho chi minh',
            country: 'vietnam'
        }
    ];


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