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
                margin: 10,
                responsiveClass: true,
                loop: true,

                nav: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 2,
                        nav: true
                    }
                }
            });
        });
    });

});

abcApp.controller('aboutController', function ($scope) {
    $scope.pageTitle = "About";
});
