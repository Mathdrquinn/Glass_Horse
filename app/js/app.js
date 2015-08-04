console.log('brendan');
angular.module("CarouselApp", ["ngRoute", "ngResource", "firebase", "ui.router"])

    .config(function($routeProvider) {

        $routeProvider

            .when("/", {

                templateUrl:"../views/carousel.html",
                controller:"homeCtrl"

            })

            .when("/people/:peopleId", {

                templateUrl:"views/blank.html",
                controller:"peopleCtrl"

            })

            .otherwise({

                redirectTo:"/"

            })

    });