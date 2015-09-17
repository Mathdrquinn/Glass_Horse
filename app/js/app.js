console.log('brendan');

angular
  .module('carouselApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
  ])
  .config(($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('markup', {
      url: '/markup',
      views: {
        'page': {
          templateUrl: 'views/blue.html'
        }
      }
    })
    .state('main', {
      url: '',
      views: {
        'page': {
          templateUrl: 'views/carousel/carousel.html',
          controller: 'carouselCtrl'
        }
      },
      abstract: true
    })
    .state('main.general', {
      parent: 'main',
      url: '/',
      views: {
        'options@main': {
          templateUrl: 'views/carousel/options/general.html'
        }
      }
    })
    .state('main.home.freemode', {
      parent: 'main.home',
      url: '',
      views: {
        'options@main.home': {
          templateUrl: 'views/carousel/options/freeMode.html'
        }
      }
    })
    .state('main.home.effect', {
      parent: 'main.home',
      url: '',
      views: {
        'options@main.home': {
          templateUrl: 'views/carousel/options/effect.html'
        }
      }
    })
    .state('main.home.spacing', {
      parent: 'main.home',
      url: '',
      views: {
        'options@main.home': {
          templateUrl: 'views/carousel/options/spacing.html'
        }
      }
    })
    .state('main.home.touch', {
      parent: 'main.home',
      url: '',
      views: {
        'options@main.home': {
          templateUrl: 'views/carousel/options/touch.html'
        }
      }
    })
    .state('main.home.other', {
      parent: 'main.home',
      url: '',
      views: {
        'options@main.home': {
          templateUrl: 'views/carousel/options/other.html'
        }
      }
    })
});
