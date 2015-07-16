'use strict';

var abcApp = angular.module('abcApp', ['ngRoute']);

abcApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'views/partials/about.html',
                controller: 'aboutController'
            })
            .otherwise({
                templateUrl: 'views/partials/gallery.html',
                controller: 'galleryController'
            });
    }]);

abcApp.controller('mainController', function ($scope) {

});


abcApp.controller('galleryController', function ($scope) {
    $scope.pageTitle = "Gallery";

    $scope.$on('$viewContentLoaded', function () {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                items: 2,
                lazyLoad: true,
                loop: true,
                margin: 10,
                itemsScaleUp: true
            });
        });
    });

});

abcApp.controller('aboutController', function ($scope) {
    $scope.pageTitle = "About";
});
