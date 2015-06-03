/**
 * Created by jaspreet on 3/06/15.
 */


var app = angular.module('spa',['ngRoute', 'ngAnimate']);


app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'partials/home.html'
        })
        .when('/page1',{
            templateUrl: 'partials/page1.html'
        })
        .when('/page2',{
            templateUrl: 'partials/page2.html'
        })
        .when('/page3',{
            templateUrl: 'partials/page3.html'
        })
        .when('/page4',{
            templateUrl: 'partials/page4.html'
        })
        .when('/main',{
            templateUrl: 'partials/main.html'
        });
});


app.controller('mainController',['$scope', function($scope) {
}])