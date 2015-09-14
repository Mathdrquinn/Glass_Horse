console.log('brendan');
var carouselApp = angular.module("carouselApp", [
  "ui.router",
  "ngResource",
  "firebase"
])

carouselApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // Default Template, given by the 'otherwise'
    .state('home', {
        url: '/home',
        views: {
            'nav': {
              templateUrl: 'views/nav.html',
              controller: 'homeCtrl'
            },
            'main': {
              templateUrl: 'views/main.html',
              controller: 'carouselCtrl'
            },
            'options@main': {
              templateUrl: 'views/forms/general.html',
              controller: 'carouselCtrl'
            }
        }
    })
    // Family state with Sub Views
    .state('family', {
        url: '/family',
        views: {
            // the main template will be placed here (relatively named)
            '': {
              templateUrl: 'templates/family.html',
              controller: 'FamilyCtrl'
             },
            // the child views will be defined here (absolutely named)
            'right@family': {
              templateUrl: 'templates/family.right.html',
              controller: 'FamilyCtrl'
             },

            // for column two, we'll define a separate controller
            'bottom@family': {
                templateUrl: 'templates/family.bottom.html',
            }
        }
    })
    .state('family.person', {
        url: '/:personIndex',
        views: {

            // the child views will be defined here (absolutely named)
            'right@family': {
              templateUrl: 'templates/family.right-person.html',
              controller: 'PersonCtrl',
             }
             // there is a bottom view, but it maintains its template

        }
    });
  $urlRouterProvider.otherwise('/home');
});
