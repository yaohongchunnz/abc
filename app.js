'use strict';

var abcApp = angular.module('abcApp', ['ngRoute']);

abcApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'views/partials/about.html'
            })
            .otherwise({
                templateUrl: 'views/partials/home.html'
            });
    }]);
