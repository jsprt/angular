/**
 * Created by jaspreet on 3/06/15.
 */


var app = angular.module('spa',['ngRoute', 'ngAnimate']);


app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .when('/page1',{
            templateUrl: 'partials/page1.html',
            controller: 'page1Controller'
        })
        .when('/page2',{
            templateUrl: 'partials/page2.html',
            controller: 'page2Controller'
        })
        .when('/page3',{
            templateUrl: 'partials/page3.html',
            controller: 'page3Controller'
        })
        .when('/page4',{
            templateUrl: 'partials/page4.html',
            controller: 'page4Controller'
        })
        .when('/main',{
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        });
});


app.controller('mainController',['$scope', function($scope) {
    $scope.pageClass = 'partial-main';
}]);

app.controller('page1Controller',['$scope', function($scope) {
    $scope.pageClass = 'partial-page1';
}]);
app.controller('page2Controller',['$scope', function($scope) {
    $scope.pageClass = 'partial-page2';
}]);
app.controller('page3Controller',['$scope', function($scope) {
    $scope.pageClass = 'partial-page3';
}]);
app.controller('page4Controller',['$scope', function($scope) {
    $scope.pageClass = 'partial-page4';
}]);
app.controller('homeController',['$scope', function($scope) {
    $scope.pageClass = 'partial-home';
}]);